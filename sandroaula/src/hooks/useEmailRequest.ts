import { EmailRequest } from "../@types/EmailRequest";
import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TOKEN = "";

const sendEmailRequest = async (novoEmail: EmailRequest): AxiosPromise<EmailRequest> => {
  return axios.post('/api/function-1', novoEmail, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`
    },
  });
};

export function useEmailRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: sendEmailRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['email-request'] });
    },
  });
}
