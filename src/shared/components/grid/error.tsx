"use client";

import { Container } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";
 
import { Text } from "../text"; 
import { Paper } from "../paper";
import { Button } from "../button";

export const ErrorАlert = ({ title, description }: { title: string; description: string }) => {
  return (
    <Container size="1">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Paper>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <FaExclamationTriangle width={16} height={16} className="text-yellow-500 mb-4" />
            <Text>{title}</Text>
            <Text size="body">Oops! Something went wrong.</Text>
            <Text size="body1">{description || "Please try again later or contact support."}</Text>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="secondary" fullWidth onClick={() => window.location.reload()}>
              Reload
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="transparent" fullWidth onClick={() => window.history.back()}>
              Go Back
            </Button>
          </motion.div>
        </Paper>
      </motion.div>
    </Container>
  );
};
