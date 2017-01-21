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

  /*  Map Data To Shafts
      @type   private
      @param  shafts [Shaft[]]
      @return void
   */
  private mapDataToShafts (data: any[]): Shaft[] {
    return data.map(row => new Shaft(row.id, row.stories));
  }

  /*  Build
      @type   public
      #param  config [any[] !optional]
      @return Promise [any]
   */
  public build (config?: any[]): Promise<any> {
    if (config) {
      this.shafts = this.mapDataToShafts(config);
      this.broadcast(this.shafts);
      return Promise.resolve();
    } else {
      return this.getShafts()
        .then(shafts => this.broadcast(shafts));
    }
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
      .then(data => (this.shafts = this.mapDataToShafts(data), this.shafts))
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

  /*  Get Top Story
      @type   public
      @return length [number]
   */
  public getTopStory (): number {
    let stories = 0;
    this.shafts.forEach(shaft => (stories = (stories < shaft.stories) ? shaft.stories : stories));
    return stories;
  }

  /*  Find Shaft
      @type   public
      @param  id [number]
      @return Promise [Shaft]
   */
  public findShaft (id: number): Shaft {
    return this.shafts.find(shaft => shaft.id === id);
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
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  /*  Put
      @type   private
      @param  shaft [Shaft]
      @return Promise [Shaft]
      - Update existing Shaft
   */
  private put (shaft: Shaft): Promise<Shaft> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

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
