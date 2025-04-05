import { GenerationData } from "../domain/get-generation-data.domain";
import { getGenerationData } from "../api/generation.service";
import { generationDataAdapter } from "../adapters/generation.adapter";
import { useQuery } from "../../../hooks/useQuery";
import { toMiliseconds, Units } from "../../../utils/time.util";

export const useGenerationDataQuery = () =>
  useQuery<GenerationData>({
    queryKey: ["generationData"],
    queryFn: async () => {
      const data = await getGenerationData();

      const generationData = generationDataAdapter(data.data);

      return generationData;
    },
    refetchInterval: toMiliseconds(30, Units.MINUTES),
  });
