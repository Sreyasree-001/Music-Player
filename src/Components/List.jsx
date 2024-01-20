import { Card, Flex, Avatar, Text, Box } from "@radix-ui/themes"

const List = () => {
    return (
        <>
            <Card className="w-full">
                <Flex gap="3" align="center">
                    <Avatar
                        size="3"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Music-player-banshee.svg/1024px-Music-player-banshee.svg.png"
                        radius="full"
                        fallback="T"
                    />
                    <Box>
                        <Text as="div" size="3" weight="bold">
                            Song name
                        </Text>
                        <Text as="div" size="3" color="gray">
                            about song
                        </Text>
                    </Box>
                </Flex>
            </Card>
        </>
    )
}

export default List
