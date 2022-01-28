import * as jspb from 'google-protobuf'



export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class Student extends jspb.Message {
  getName(): string;
  setName(value: string): Student;

  getSex(): string;
  setSex(value: string): Student;

  getFavoratesList(): Array<string>;
  setFavoratesList(value: Array<string>): Student;
  clearFavoratesList(): Student;
  addFavorates(value: string, index?: number): Student;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Student.AsObject;
  static toObject(includeInstance: boolean, msg: Student): Student.AsObject;
  static serializeBinaryToWriter(message: Student, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Student;
  static deserializeBinaryFromReader(message: Student, reader: jspb.BinaryReader): Student;
}

export namespace Student {
  export type AsObject = {
    name: string,
    sex: string,
    favoratesList: Array<string>,
  }
}

export class Suject extends jspb.Message {
  getLiberalArtsList(): Array<Score>;
  setLiberalArtsList(value: Array<Score>): Suject;
  clearLiberalArtsList(): Suject;
  addLiberalArts(value?: Score, index?: number): Score;

  getScienceList(): Array<Score>;
  setScienceList(value: Array<Score>): Suject;
  clearScienceList(): Suject;
  addScience(value?: Score, index?: number): Score;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Suject.AsObject;
  static toObject(includeInstance: boolean, msg: Suject): Suject.AsObject;
  static serializeBinaryToWriter(message: Suject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Suject;
  static deserializeBinaryFromReader(message: Suject, reader: jspb.BinaryReader): Suject;
}

export namespace Suject {
  export type AsObject = {
    liberalArtsList: Array<Score.AsObject>,
    scienceList: Array<Score.AsObject>,
  }
}

export class Score extends jspb.Message {
  getName(): string;
  setName(value: string): Score;

  getScore(): string;
  setScore(value: string): Score;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Score.AsObject;
  static toObject(includeInstance: boolean, msg: Score): Score.AsObject;
  static serializeBinaryToWriter(message: Score, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Score;
  static deserializeBinaryFromReader(message: Score, reader: jspb.BinaryReader): Score;
}

export namespace Score {
  export type AsObject = {
    name: string,
    score: string,
  }
}

export class OneOfSample extends jspb.Message {
  getName(): string;
  setName(value: string): OneOfSample;

  getSubMessage(): Score | undefined;
  setSubMessage(value?: Score): OneOfSample;
  hasSubMessage(): boolean;
  clearSubMessage(): OneOfSample;

  getTestOneofCase(): OneOfSample.TestOneofCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OneOfSample.AsObject;
  static toObject(includeInstance: boolean, msg: OneOfSample): OneOfSample.AsObject;
  static serializeBinaryToWriter(message: OneOfSample, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OneOfSample;
  static deserializeBinaryFromReader(message: OneOfSample, reader: jspb.BinaryReader): OneOfSample;
}

export namespace OneOfSample {
  export type AsObject = {
    name: string,
    subMessage?: Score.AsObject,
  }

  export enum TestOneofCase { 
    TEST_ONEOF_NOT_SET = 0,
    NAME = 4,
    SUB_MESSAGE = 9,
  }
}

export class EchoRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): EchoRequest;

  getStudent(): Student | undefined;
  setStudent(value?: Student): EchoRequest;
  hasStudent(): boolean;
  clearStudent(): EchoRequest;

  getSuject(): Suject | undefined;
  setSuject(value?: Suject): EchoRequest;
  hasSuject(): boolean;
  clearSuject(): EchoRequest;

  getKeyvalueMap(): jspb.Map<string, string>;
  clearKeyvalueMap(): EchoRequest;

  getKeyScroeMap(): jspb.Map<string, Score>;
  clearKeyScroeMap(): EchoRequest;

  getOneOfSample(): OneOfSample | undefined;
  setOneOfSample(value?: OneOfSample): EchoRequest;
  hasOneOfSample(): boolean;
  clearOneOfSample(): EchoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EchoRequest): EchoRequest.AsObject;
  static serializeBinaryToWriter(message: EchoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoRequest;
  static deserializeBinaryFromReader(message: EchoRequest, reader: jspb.BinaryReader): EchoRequest;
}

export namespace EchoRequest {
  export type AsObject = {
    message: string,
    student?: Student.AsObject,
    suject?: Suject.AsObject,
    keyvalueMap: Array<[string, string]>,
    keyScroeMap: Array<[string, Score.AsObject]>,
    oneOfSample?: OneOfSample.AsObject,
  }
}

export class EchoResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): EchoResponse;

  getMessageCount(): number;
  setMessageCount(value: number): EchoResponse;

  getResp(): EchoRequest | undefined;
  setResp(value?: EchoRequest): EchoResponse;
  hasResp(): boolean;
  clearResp(): EchoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EchoResponse): EchoResponse.AsObject;
  static serializeBinaryToWriter(message: EchoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoResponse;
  static deserializeBinaryFromReader(message: EchoResponse, reader: jspb.BinaryReader): EchoResponse;
}

export namespace EchoResponse {
  export type AsObject = {
    message: string,
    messageCount: number,
    resp?: EchoRequest.AsObject,
  }
}

export class ServerStreamingEchoRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ServerStreamingEchoRequest;

  getMessageCount(): number;
  setMessageCount(value: number): ServerStreamingEchoRequest;

  getMessageInterval(): number;
  setMessageInterval(value: number): ServerStreamingEchoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerStreamingEchoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerStreamingEchoRequest): ServerStreamingEchoRequest.AsObject;
  static serializeBinaryToWriter(message: ServerStreamingEchoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerStreamingEchoRequest;
  static deserializeBinaryFromReader(message: ServerStreamingEchoRequest, reader: jspb.BinaryReader): ServerStreamingEchoRequest;
}

export namespace ServerStreamingEchoRequest {
  export type AsObject = {
    message: string,
    messageCount: number,
    messageInterval: number,
  }
}

export class ServerStreamingEchoResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ServerStreamingEchoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerStreamingEchoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerStreamingEchoResponse): ServerStreamingEchoResponse.AsObject;
  static serializeBinaryToWriter(message: ServerStreamingEchoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerStreamingEchoResponse;
  static deserializeBinaryFromReader(message: ServerStreamingEchoResponse, reader: jspb.BinaryReader): ServerStreamingEchoResponse;
}

export namespace ServerStreamingEchoResponse {
  export type AsObject = {
    message: string,
  }
}

export class ClientStreamingEchoRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ClientStreamingEchoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientStreamingEchoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClientStreamingEchoRequest): ClientStreamingEchoRequest.AsObject;
  static serializeBinaryToWriter(message: ClientStreamingEchoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientStreamingEchoRequest;
  static deserializeBinaryFromReader(message: ClientStreamingEchoRequest, reader: jspb.BinaryReader): ClientStreamingEchoRequest;
}

export namespace ClientStreamingEchoRequest {
  export type AsObject = {
    message: string,
  }
}

export class ClientStreamingEchoResponse extends jspb.Message {
  getMessageCount(): number;
  setMessageCount(value: number): ClientStreamingEchoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientStreamingEchoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClientStreamingEchoResponse): ClientStreamingEchoResponse.AsObject;
  static serializeBinaryToWriter(message: ClientStreamingEchoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientStreamingEchoResponse;
  static deserializeBinaryFromReader(message: ClientStreamingEchoResponse, reader: jspb.BinaryReader): ClientStreamingEchoResponse;
}

export namespace ClientStreamingEchoResponse {
  export type AsObject = {
    messageCount: number,
  }
}

