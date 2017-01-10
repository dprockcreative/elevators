import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Shaft } from '../interfaces/index';

@Injectable()
export class ShaftService {

  private url     : string  = 'app/shafts';
  private shafts  : Shaft[] = [];
  private config  : (any)   = [];

  constructor (private http: Http) {}

  /*  Get Config
      @type   public
      @return hashmap
   */
  public getConfig (): {[key: string]: number}[] {
    return this.config;
  }

  /*  Build Shafts
      @type   public
      @return Promise [Shaft Array]
   */
  public buildShafts (): Promise<Shaft[]> {
    let data;
    return this.http
      .get(this.url)
      .toPromise()
      .then(res => (data = res.json().data, this.config = data.map(row => ({ 'id' : row.id, 'stories' : row.stories })), data))
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
  public getShafts (): Promise<Shaft[]> {
    return Promise.resolve(this.shafts as Shaft[]);
  }

  /*  Get Shaft
      @type   public
      @param  id [number]
      @return Promise [Shaft]
   */
  public getShaft (id: number): Promise<Shaft> {
    return this.getShafts()
      .then(shafts => shafts.find(shaft => shaft.id === id));
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
    return this[shaft.id ? 'put' : 'post'](shaft);
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
