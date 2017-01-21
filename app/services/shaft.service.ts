import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';

import { Shaft } from '../interfaces/index';

@Injectable()
export class ShaftService {

  private url: string = 'app/shafts';
  private shafts: Shaft[] = [];

  // Observable sources
  private buildShaftsSource = new Subject<Shaft[]>();

  // Observable streams
  buildShaftsStream = this.buildShaftsSource.asObservable();

  constructor (
    private http: Http
  ) {}

  /*  Broadcast
      @type   private
      @param  shafts [Shaft[]]
      @return void
   */
  private broadcast (shafts: Shaft[]): void {
    this.buildShaftsSource.next(shafts);
  }

  /*  Build
      @type   public
      @return void
   */
  public build (): void {
    this.getShafts()
      .then(shafts => this.broadcast(shafts));
  }

  /*  Build Shafts
      @type   public
      @return Promise [Shaft Array]
   */
  public getShafts (): Promise<Shaft[]> {
    return this.http
      .get(this.url)
      .toPromise()
      .then(response => response.json().data)
      .then(data => (this.shafts = data.map(row => new Shaft(row.id, row.stories)), this.shafts))
      .catch(this.handleError);
  }

  /*  Get Current
      @type   public
      @return array [Shaft Array]
   */
  public getCurrent (): Shaft[] {
    return this.shafts;
  }

  /*  Get Length
      @type   public
      @return length [number]
   */
  public getLength (): number {
    return this.shafts.length;
  }

  /*  Get Shafts
      @type   public
      @return Promise [Shaft Array]
   */
  public getShaftsPromise (): Promise<Shaft[]> {
    return Promise.resolve(this.shafts as Shaft[]);
  }

  /*  Get Shaft
      @type   public
      @param  id [number]
      @return Promise [Shaft]
   */
  public getShaftPromise (id: number): Promise<Shaft> {
    return this.getShaftsPromise()
      .then(shafts => shafts.find(shaft => shaft.id === id));
  }

  /*  Find Shaft
      @type   public
      @param  id [number]
      @return Promise [Shaft]
   */
  public findShaft (id: number): Shaft {
    return this.shafts.find(shaft => shaft.id === id);
  }

  /*  Remove
      @type   public
      @param  shaft [Shaft]
      @return Promise [Response]
   */
  public remove (shaft: Shaft): Promise<Response> {
    return this.delete(shaft);
  }

  /*  Remove By Index
      @type   public
      @param  shaft [Shaft]
      @return Promise [Response]
   */
  public removeByIndex (index: number): Promise<Response> {
    return this.delete(this.shafts[index]);
  }

  /*  Save
      @type   public
      @param  shaft [Shaft]
      @return Promise [Shaft]
   */
  public save (shaft: Shaft): Promise<Shaft> {
    if (shaft.id) {
      return this.post(shaft);
    } else {
      return this.put(shaft);
    }
  }

  /*  Delete
      @type   private
      @param  shaft [Shaft]
      @return Promise [Response]
   */
  private delete (shaft: Shaft): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.url}/${shaft.id}`;

    return this.http
      .delete(url, { 'headers' : headers })
      .toPromise()
      .catch(this.handleError);
  }

  /*  Post
      @type   private
      @param  shaft [Shaft]
      @return Promise [Shaft]
      - Adds new Shaft
   */
  private post (shaft: Shaft): Promise<Shaft> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.url, JSON.stringify(shaft), { 'headers' : headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  /*  Put
      @type   private
      @param  shaft [Shaft]
      @return Promise [Shaft]
      - Update existing Shaft
   */
  private put (shaft: Shaft): Promise<Shaft> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.url}/${shaft.id}`;

    return this.http
      .put(url, JSON.stringify(shaft), { 'headers' : headers })
      .toPromise()
      .then(() => shaft)
      .catch(this.handleError);
  }

  /*  Handle Error
      @type   private
      @param  error [any]
      @return Promise [any]
   */
  private handleError (error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
