"use client";
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import ItemList from "./item-list";
import InquiryForm from "./inquiry-form";

const contacts = [
  {
    title: "(+233) 207-565-990",
    image: "/icons/phone.jpg",
    subtitle: "Phone",
  },
  {
    title: "headoffice@xcuxion.org",
    image: "/icons/email.jpg",
    subtitle: "Email",
  },
  {
    title: (
      <Link
        href="https://xcuxionschoolbatch25.slack.com/archives/C08B6SFDQT0
"
      >
        Connect via Slack
      </Link>
    ),
    image: "/icons/community.jpg",
    subtitle: "Community",
  },
  {
    title: "Remote",
    image: "/icons/location.jpg",
    subtitle: "Location",
  },
];
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-screen px-5 md:px-0 py-5 flex z-10 flex-col md:flex-center bg-gradient-to-br from-black to-gray-950"
    >
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xl md:text-4xl font-semibold text-center"
      >
        Contact Us
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:text-lg md:w-1/2 mx-auto text-center"
      >
        Get in touch with us via the following
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-10 mt-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-2 md:space-y-4"
        >
          {contacts.map((contact, index) => (
            <ItemList {...contact} key={index} />
          ))}
        </motion.div>
        <InquiryForm />
      </motion.div>
    </motion.div>
  );
};

export default Contact;
