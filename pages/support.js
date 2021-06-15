import Head from 'next/head'
import {
  Heading,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react"


export default function Home() {
  return (
    <>
      <Head>
        <title>Wutmon App - Support</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Heading as="h1">Wutmon App</Heading>
      </header>

      <main>
        <Box mb={8}>
          <Heading size="lg">Support</Heading>
        </Box>


        <Stat mb={4}>
          <StatLabel>E-Mail</StatLabel>
          <StatNumber><a href="mailto:bitapps@gmail.com?subject=Wutmon%20Support">2bitapps@gmail.com</a></StatNumber>
        </Stat>

        <Stat>
          <StatLabel>Twitter</StatLabel>
          <StatNumber><a href="https://twitter.com/fnnpth">@fnnpth</a></StatNumber>
        </Stat>
      </main>
    </>
  )
}
