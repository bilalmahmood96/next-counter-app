"use client";

import { Button, Text, useToast } from "@chakra-ui/react";
import styles from "./page.module.css";
import CounterToast from "./components/counter-toast";
import { useCounter } from "./providers/CounterProvider/CounterProvider";

export default function Counter() {
  const { count, increment } = useCounter();
  const toast = useToast();

  const handleClick = () => {
    increment();
    toast({
      duration: 2000,
      isClosable: true,
      position: "bottom-right",
      render: () => (
        <CounterToast count={count + 1} />
      ),
    });
  };

  return (
    <>
      <div className={styles.main}>
        <Text fontSize="xl" color="black">
          Current count {count}
        </Text>
        <Button onClick={handleClick} bgColor="#ebecef"  ml={4}>
          +1
        </Button>
      </div>
    </>
  );
}
