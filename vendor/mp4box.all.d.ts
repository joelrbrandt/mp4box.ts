export declare const Log: any;

export declare const MP4BoxStream: any;

export declare const DataStream: any;

export declare const MultiBufferStream: any;

export declare const MPEG4DescriptorParser: any;

export declare const BoxParser: any;

export declare const XMLSubtitlein4Parser: any;

export declare const Textin4Parser: any;

export declare class ISOFile {
  onReady: () => void;

  constructor(stream: unknown);
}

export declare function createFile(
  _keepMdatData?: unknown,
  _stream?: unknown
): ISOFile;
