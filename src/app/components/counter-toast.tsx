import { Box, Text, useToast } from "@chakra-ui/react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function CounterToast(props: { count: number }) {
  const toast = useToast();
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      padding="12px 20px 12px 16px"
      gap="8px"
      background="linear-gradient(108deg, rgba(70, 104, 84, 1) 0%, rgba(69, 70, 79, 1) 24%)"
      boxShadow="0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50, 0.06)"
      borderRadius="8px"
      border="1px solid linear-gradient(108deg, rgba(70, 104, 84, 1) 0%, rgba(69, 70, 79, 1) 24%)"
    >
      <IoIosCheckmarkCircleOutline color="#74C898" size={30} />
      <Text fontWeight="500" fontSize="16px" lineHeight="26px" color="#FFFFFF">
        <strong>Incremented</strong>
        <br />
        Counter is now {props.count}
      </Text>
    </Box>
  );
}
