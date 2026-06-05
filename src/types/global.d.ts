// src/types/global.d.ts

declare module "mic-recorder-to-mp3" {
  // Define the interface for the recorder's constructor options
  interface MicRecorderOptions {
    bitRate?: 128 | 96 | 80 | 64 | 56 | 48 | 40 | 32;
  }

  // Define the class that will be used as the type
  class MicRecorder {
    constructor(options?: MicRecorderOptions);

    start(): Promise<void>;
    stop(): {
      getMp3: () => Promise<[buffer: ArrayBuffer, blob: Blob]>;
    };
  }

  // This line is crucial: it makes the class the default export of the module
  export default MicRecorder;
}

// src/types/global.d.ts

// This tells TypeScript we are augmenting an existing module.
