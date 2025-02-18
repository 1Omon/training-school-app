import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const XcuxionWelcomeEmail = ({
  userFirstname,
  email,
}: {
  userFirstname: string;
  email: string;
}) => (
  <Html>
    <Head />
    <Preview>
      You've successfully submitted your appliction to join Batch'25 of XCUXION
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
              src={`${baseUrl}/static/logo.png`}
            width="49"
            height="21"
            alt="Xcuxion Logo"
          />
          <Hr style={hr} />
          <Text style={header}>🌟 Thank You for Your Application! 🎉</Text>
          <Text style={paragraph}>
            We’re excited to receive your application for XCUXION Batch ’25!
            Your journey toward innovation and growth starts here, and we can’t
            wait to learn more about you.
          </Text>
          <Text style={paragraph}> 🚀 What’s next? </Text>
          <Text style={paragraph}>
            ✅ Access Your Admission Portal – Review and update your application
            details.
            <Link style={anchor} href="/admission-portal">
              Access Your Admission Portal
            </Link>{" "}
          </Text>
          <Text style={paragraph}>
            ✅ Explore Financial Aid Options – Learn about support available to
            you.,{" "}
            <Link style={anchor} href="https://xcuxion.org/#admissions">
              read this post.
            </Link>{" "}
          </Text>

          <Text style={paragraph}>
            ✅ Stay Connected – Our support team is here to guide you at every
            step. We’ll keep you updated on the next steps in the selection
            process. In the meantime, if you have any questions, feel free to
            reach out—we’re here to help!{" "}
            <Link style={anchor} href="https://xcuxion.org/#contact">
              support site
            </Link>
            .
          </Text>
          <Text style={paragraph}>✨ Stay tuned for what’s ahead! ✨</Text>
          <Text style={paragraph}>— The Admission team</Text>
          <Hr style={hr} />
          <Text style={footer}>XCUXION, Ghana</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default XcuxionWelcomeEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "20px auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const header = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#2c3e50",
  marginBottom: "18px",
};
const paragraph = {
  color: "#2c3e50",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "14px",
  lineHeight: "16px",
};
