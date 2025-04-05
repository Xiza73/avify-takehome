export interface ApiGenerationData {
  from: string;
  to: string;
  generationmix: {
    fuel: string;
    perc: number;
  }[];
}

export interface GenerationMix {
  fuel: string;
  percentage: number;
}

export interface GenerationData {
  from: Date;
  to: Date;
  generationMix: GenerationMix[];
}

export type GetGenerationDataResponse = {
  data: ApiGenerationData;
};
