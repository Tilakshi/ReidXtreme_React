import React from 'react'
import Section from './Section';
import {Stack } from "@mui/material";
import Hero from './Hero';
import Introduction from './Introduction';
import Schedule from './Schedule';
import Prizes from './Prizes';
import FAQ from './FAQ';
import Footer from './Footer'

export default function Main() {
  return (
    <div>
      <Section>
         <Stack direction={"column"} spacing={5}>
            <Section>
                <Hero/>
            </Section>
            <Section>
                <Introduction/>
            </Section>
            
            <Section>
                <Schedule/>
            </Section>

            <Section>
                <Prizes/>
            </Section>

            <Section>
                <FAQ/>
            </Section>

            <Section>
                <Footer/>
            </Section>
            
         </Stack>
      </Section>
    </div>
  )
}
