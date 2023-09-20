export declare const Log: unknown;

export declare const MP4BoxStream: unknown;

export declare const DataStream: unknown;

export declare const MultiBufferStream: unknown;

export declare const MPEG4DescriptorParser: unknown;

export declare const BoxParser: unknown;

export declare const XMLSubtitlein4Parser: unknown;

export declare const Textin4Parser: unknown;

export declare class ISOFile {
  onReady: () => void;

  constructor(stream: unknown);
}

export declare function createFile(
  _keepMdatData?: unknown,
  _stream?: unknown
): ISOFile;
