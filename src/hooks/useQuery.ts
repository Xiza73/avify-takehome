import { QueryKey, useQuery as useRQQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

import { useLoader } from "../store/loader/useLoader";
import { QueryParams } from "../domain/api.domain";

interface UseQueryProps {
  queryKey: QueryKey;
  queryFn: any;
  refetchInterval?: number;
}

export const useQuery = <T, K = object>({
  queryKey,
  queryFn,
  refetchInterval,
  enabled = true,
  showSuccess,
  showError,
}: UseQueryProps & Partial<QueryParams<K>>) => {
  const { setIsFetching } = useLoader();

  const { data, error, isFetching, isLoading, refetch } = useRQQuery<T>({
    queryKey,
    queryFn,
    enabled,
    ...(refetchInterval && { refetchInterval }),
  });

  useEffect(() => {
    if (error && showError) {
      toast.error("An error occurred while fetching data.");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    if (data && showSuccess) {
      toast.success("Data fetched successfully.");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setIsFetching(isLoading || isFetching);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isFetching]);

  return { data, error, isFetching, isLoading, refetch };
};
