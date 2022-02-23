/* eslint-disable @typescript-eslint/no-explicit-any */
import * as jsonfile from "jsonfile";
import { v4 as uuidv4 } from "uuid";

export class DB {
  private collectionPath = "";

  constructor(collectionPath: string) {
    this.collectionPath = collectionPath;
  }

  public async read(): Promise<any[]> {
    let collection: any[] = [];
    try {
      collection = await jsonfile.readFile(this.collectionPath);
    } catch (error) {
      throw new Error(String(error));
    }
    return collection;
  }

  public async find(id: string): Promise<any | undefined> {
    let collection: any[] = [];
    try {
      collection = await jsonfile.readFile(this.collectionPath);
    } catch (error) {
      throw new Error(String(error));
    }
    const data = collection.find((d) => d.id === id);
    return data;
  }

  public async save(data: any): Promise<any> {
    try {
      data.id = uuidv4().split("-")[0];
      let collection: any[] = [];
      try {
        collection = await jsonfile.readFile(this.collectionPath);
      } catch (error) {
        throw new Error(String(error));
      }
      collection.push(data);
      await jsonfile.writeFile(this.collectionPath, collection);
      return data;
    } catch (error) {
      throw new Error(String(error));
    }
  }

  public delete = async (id: string): Promise<any[]> => {
    let index;
    let collection: any[] = [];
    try {
      collection = await jsonfile.readFile(this.collectionPath);
    } catch (error) {
      throw new Error(String(error));
    }
    collection.forEach((d: any, i: number) => {
      if (d.id === id) {
        index = i;
      }
    });
    if (index) {
      collection.splice(index, 1);
    }
    try {
      await jsonfile.writeFile(this.collectionPath, collection);
    } catch (error) {
      throw new Error(String(error));
    }
    return collection;
  };
}
