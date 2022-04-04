import { VStack, 
    Heading,
     Text, 
     SimpleGrid, 
     GridItem, 
     FormControl, 
     FormLabel, 
     Input, 
     Select,
    Checkbox, 
    Button,
    useBreakpointValue
 } from "@chakra-ui/react";


const Details = () => {
    const colSpan = useBreakpointValue({base: 2, md: 1});
    return (
        <VStack
        w="full" 
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
        >
            <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl"> Your Details</Heading>
            <Text>if you are already an account holder</Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>first name</FormLabel>
                        <Input placeholder="John" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder="John" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder="16 BLv street, Nigeria" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>CIty</FormLabel>
                        <Input placeholder="San Francisco" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select>
                            <option value="usa">United states</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Lagos">Liberia</option>
                            <option value="Abuja">Abuja</option>
                            
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <Checkbox defaultChecked>Ship to billing address</Checkbox>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button variant="primary" size="lg" w="full">Place order</Button>
                </GridItem>
            </SimpleGrid>
       </VStack>
    )
}

export default Details