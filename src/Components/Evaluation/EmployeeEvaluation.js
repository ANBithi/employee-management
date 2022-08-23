import {Flex, Text, VStack, Grid, GridItem, HStack, Input, Select, Button, useToast, Divider} from "@chakra-ui/react";

const EmployeeEvaluation = () => {
	return (
		<Flex layerStyle="pageStyle">
			<VStack w="full" align="flex-start">
				<Text layerStyle="sectionHeaderStyle">Employee Evaluation</Text>
                <Text>Performance Growth</Text>
                <Text>Salary Growth</Text>
                <Text>Learnings:</Text>

			</VStack>
		</Flex>
	);
};
export default EmployeeEvaluation;
