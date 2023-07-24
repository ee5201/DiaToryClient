import { gql } from "@apollo/client";

export const CHECKEMAIL = gql`
  mutation sendEmail($email: String!) {
    sendEmail(email: $email) {
      email
    }
  }
`;
