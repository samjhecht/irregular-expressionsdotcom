import * as React from 'react';
import { graphql } from "gatsby";
import { useState, useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import { Typography, Container, Box, Stack } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'
import Link from '../components/Link';
import Layout from '../components/Layout';
import { styled, keyframes } from '@mui/material/styles';
import Header from "../components/Header"
import StickyFooter from '../components/Footer';
import WaveyFooter from '../components/WaveyFooter';
import CssWave from '../components/CssWave';


const Testy = ({ location, theme }) => {

    return (
            <Stack
                maxWidth="100%"
                direction="column"
                justifyContent='center'
                alignItems='center'
                spacing={0}
                padding={0}
                mb={0}
                sx={{
                    bottom: 0,
                }}
            >
                <Container
                    // maxWidth="sm"
                    maxWidth="100%"
                    sx={{
                        // display: 'flex',
                        // flexDirection: 'column',
                        minHeight: '80vh',
                        // margin: '0 auto',
                        // padding: '2.5rem 1.25rem',
                        // maxWidth: '42rem',
                        // alignContent: 'center',
                        // justifyContent: 'flex-start',
                        // justifyContent: 'center',
                        // alignItems: 'center',
                    }}
                >
                    <Header location={location} />
                    <Container component="main" sx={{ mt: 20 }} maxWidth="100%">
                        <Box sx={{
                            // padding: '2.5rem 1.25rem',
                            mb: 2,
                        }}>
                            The sun that&apos;s always just about to set<br />
                            The fog just can&apos;t bring itself to lift<br />
                            A cold, wet mist across a field like a soft, dry  blanket.  <br />
                            The wind that whispers warmly as though the storms aren&apos;t on their way. <br />
                            What keeps us?  Why linger?<br />
                            Why is it so hard to look away?<br />
                            And to think!<br />
                            I&apos;d have never known how beautiful a sunset it really was. <br />
                            If I hadn&apos;t turned around to watch it glowing across your face. <br />
                        </Box>
                        <CssWave />
                    </Container>
                </Container>
                <WaveyFooter sx={{ bottom: 0, }} maxWidth="100%" />
            </Stack>
    )
}

export default Testy

export const pageQuery = graphql`
                                            query {
                                                site {
                                                siteMetadata {
                                                title
                                            }
    }
  }
                                            `

// import * as React from 'react';
// import { graphql } from "gatsby";
// import { useState, useRef, useEffect } from 'react';
// import { Typography, Box, Stack } from '@mui/material';
// import Grid2 from '@mui/material/Unstable_Grid2'
// import Link from '../components/Link';
// import Layout from '../components/Layout';
// import { Animated, StyleSheet, Easing, View } from 'react-native';
// import Fireworks from '../assets/svgs/Fireworks';

// const AnimatedFireWorks = Animated.createAnimatedComponent(Fireworks)

// const variants = [
//     "M0,96L9.6,117.3C19.2,139,38,181,58,202.7C76.8,224,96,224,115,218.7C134.4,213,154,203,173,218.7C192,235,211,277,230,256C249.6,235,269,149,288,133.3C307.2,117,326,171,346,186.7C364.8,203,384,181,403,186.7C422.4,192,442,224,461,240C480,256,499,256,518,240C537.6,224,557,192,576,149.3C595.2,107,614,53,634,48C652.8,43,672,85,691,90.7C710.4,96,730,64,749,90.7C768,117,787,203,806,229.3C825.6,256,845,224,864,186.7C883.2,149,902,107,922,117.3C940.8,128,960,192,979,186.7C998.4,181,1018,107,1037,64C1056,21,1075,11,1094,48C1113.6,85,1133,171,1152,208C1171.2,245,1190,235,1210,218.7C1228.8,203,1248,181,1267,149.3C1286.4,117,1306,75,1325,96C1344,117,1363,203,1382,218.7C1401.6,235,1421,181,1430,154.7L1440,128L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z",
//     "M0,128L9.6,128C19.2,128,38,128,58,149.3C76.8,171,96,213,115,229.3C134.4,245,154,235,173,197.3C192,160,211,96,230,69.3C249.6,43,269,53,288,90.7C307.2,128,326,192,346,218.7C364.8,245,384,235,403,245.3C422.4,256,442,288,461,298.7C480,309,499,299,518,293.3C537.6,288,557,288,576,282.7C595.2,277,614,267,634,250.7C652.8,235,672,213,691,197.3C710.4,181,730,171,749,176C768,181,787,203,806,186.7C825.6,171,845,117,864,133.3C883.2,149,902,235,922,229.3C940.8,224,960,128,979,80C998.4,32,1018,32,1037,32C1056,32,1075,32,1094,37.3C1113.6,43,1133,53,1152,69.3C1171.2,85,1190,107,1210,122.7C1228.8,139,1248,149,1267,170.7C1286.4,192,1306,224,1325,234.7C1344,245,1363,235,1382,234.7C1401.6,235,1421,245,1430,250.7L1440,256L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z",
//     "M0,96L9.6,80C19.2,64,38,32,58,64C76.8,96,96,192,115,224C134.4,256,154,224,173,192C192,160,211,128,230,101.3C249.6,75,269,53,288,85.3C307.2,117,326,203,346,218.7C364.8,235,384,181,403,149.3C422.4,117,442,107,461,133.3C480,160,499,224,518,256C537.6,288,557,288,576,250.7C595.2,213,614,139,634,96C652.8,53,672,43,691,48C710.4,53,730,75,749,112C768,149,787,203,806,208C825.6,213,845,171,864,144C883.2,117,902,107,922,117.3C940.8,128,960,160,979,170.7C998.4,181,1018,171,1037,165.3C1056,160,1075,160,1094,176C1113.6,192,1133,224,1152,229.3C1171.2,235,1190,213,1210,213.3C1228.8,213,1248,235,1267,218.7C1286.4,203,1306,149,1325,122.7C1344,96,1363,96,1382,106.7C1401.6,117,1421,139,1430,149.3L1440,160L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z",
//     "M0,64L9.6,90.7C19.2,117,38,171,58,170.7C76.8,171,96,117,115,117.3C134.4,117,154,171,173,170.7C192,171,211,117,230,106.7C249.6,96,269,128,288,160C307.2,192,326,224,346,245.3C364.8,267,384,277,403,266.7C422.4,256,442,224,461,202.7C480,181,499,171,518,170.7C537.6,171,557,181,576,170.7C595.2,160,614,128,634,144C652.8,160,672,224,691,213.3C710.4,203,730,117,749,101.3C768,85,787,139,806,154.7C825.6,171,845,149,864,154.7C883.2,160,902,192,922,218.7C940.8,245,960,267,979,272C998.4,277,1018,267,1037,229.3C1056,192,1075,128,1094,117.3C1113.6,107,1133,149,1152,176C1171.2,203,1190,213,1210,208C1228.8,203,1248,181,1267,181.3C1286.4,181,1306,203,1325,213.3C1344,224,1363,224,1382,224C1401.6,224,1421,224,1430,224L1440,224L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z",
//     "M0,224L9.6,197.3C19.2,171,38,117,58,80C76.8,43,96,21,115,53.3C134.4,85,154,171,173,186.7C192,203,211,149,230,144C249.6,139,269,181,288,176C307.2,171,326,117,346,112C364.8,107,384,149,403,138.7C422.4,128,442,64,461,42.7C480,21,499,43,518,96C537.6,149,557,235,576,240C595.2,245,614,171,634,149.3C652.8,128,672,160,691,176C710.4,192,730,192,749,160C768,128,787,64,806,53.3C825.6,43,845,85,864,122.7C883.2,160,902,192,922,192C940.8,192,960,160,979,149.3C998.4,139,1018,149,1037,165.3C1056,181,1075,203,1094,186.7C1113.6,171,1133,117,1152,106.7C1171.2,96,1190,128,1210,170.7C1228.8,213,1248,267,1267,266.7C1286.4,267,1306,213,1325,202.7C1344,192,1363,224,1382,245.3C1401.6,267,1421,277,1430,282.7L1440,288L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z",
//     "M0,96L9.6,112C19.2,128,38,160,58,165.3C76.8,171,96,149,115,128C134.4,107,154,85,173,90.7C192,96,211,128,230,122.7C249.6,117,269,75,288,85.3C307.2,96,326,160,346,192C364.8,224,384,224,403,202.7C422.4,181,442,139,461,133.3C480,128,499,160,518,192C537.6,224,557,256,576,261.3C595.2,267,614,245,634,234.7C652.8,224,672,224,691,192C710.4,160,730,96,749,96C768,96,787,160,806,186.7C825.6,213,845,203,864,197.3C883.2,192,902,192,922,192C940.8,192,960,192,979,170.7C998.4,149,1018,107,1037,74.7C1056,43,1075,21,1094,16C1113.6,11,1133,21,1152,53.3C1171.2,85,1190,139,1210,154.7C1228.8,171,1248,149,1267,117.3C1286.4,85,1306,43,1325,32C1344,21,1363,43,1382,90.7C1401.6,139,1421,213,1430,250.7L1440,288L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z",
//     "M0,288L9.6,288C19.2,288,38,288,58,293.3C76.8,299,96,309,115,282.7C134.4,256,154,192,173,149.3C192,107,211,85,230,112C249.6,139,269,213,288,213.3C307.2,213,326,139,346,96C364.8,53,384,43,403,74.7C422.4,107,442,181,461,213.3C480,245,499,235,518,229.3C537.6,224,557,224,576,224C595.2,224,614,224,634,192C652.8,160,672,96,691,85.3C710.4,75,730,117,749,149.3C768,181,787,203,806,181.3C825.6,160,845,96,864,106.7C883.2,117,902,203,922,229.3C940.8,256,960,224,979,197.3C998.4,171,1018,149,1037,138.7C1056,128,1075,128,1094,138.7C1113.6,149,1133,171,1152,149.3C1171.2,128,1190,64,1210,48C1228.8,32,1248,64,1267,69.3C1286.4,75,1306,53,1325,42.7C1344,32,1363,32,1382,53.3C1401.6,75,1421,117,1430,138.7L1440,160L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z",
//     "M0,256L9.6,229.3C19.2,203,38,149,58,154.7C76.8,160,96,224,115,256C134.4,288,154,288,173,250.7C192,213,211,139,230,106.7C249.6,75,269,85,288,85.3C307.2,85,326,75,346,64C364.8,53,384,43,403,58.7C422.4,75,442,117,461,133.3C480,149,499,139,518,128C537.6,117,557,107,576,133.3C595.2,160,614,224,634,229.3C652.8,235,672,181,691,144C710.4,107,730,85,749,96C768,107,787,149,806,186.7C825.6,224,845,256,864,234.7C883.2,213,902,139,922,133.3C940.8,128,960,192,979,186.7C998.4,181,1018,107,1037,96C1056,85,1075,139,1094,138.7C1113.6,139,1133,85,1152,58.7C1171.2,32,1190,32,1210,64C1228.8,96,1248,160,1267,192C1286.4,224,1306,224,1325,234.7C1344,245,1363,267,1382,256C1401.6,245,1421,203,1430,181.3L1440,160L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"
// ]

// const About = ({ location }) => {

//     const [d, setD] = useState(variants[0]);
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex(index => (index + 1) % variants.length);
//             setD(variants[index]);
//         }, 20);

//         return () => {
//             clearInterval(interval);
//         };
//     }, []);

//     return (
//         <Layout location={location}>
//             <Box>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//                     <path fill="#5000ca" fill-opacity="1" d={d}>
//                     </path>
//                 </svg>
//             </Box>
//         </Layout >
//     )
// }

// export default About

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

// export default `
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
// <g clip-path="url(#clip0)">
// <path fill="#5000ca" fill-opacity="1" d="M0,256L9.6,229.3C19.2,203,38,149,58,154.7C76.8,160,96,224,115,256C134.4,288,154,288,173,250.7C192,213,211,139,230,106.7C249.6,75,269,85,288,85.3C307.2,85,326,75,346,64C364.8,53,384,43,403,58.7C422.4,75,442,117,461,133.3C480,149,499,139,518,128C537.6,117,557,107,576,133.3C595.2,160,614,224,634,229.3C652.8,235,672,181,691,144C710.4,107,730,85,749,96C768,107,787,149,806,186.7C825.6,224,845,256,864,234.7C883.2,213,902,139,922,133.3C940.8,128,960,192,979,186.7C998.4,181,1018,107,1037,96C1056,85,1075,139,1094,138.7C1113.6,139,1133,85,1152,58.7C1171.2,32,1190,32,1210,64C1228.8,96,1248,160,1267,192C1286.4,224,1306,224,1325,234.7C1344,245,1363,267,1382,256C1401.6,245,1421,203,1430,181.3L1440,160L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"></path>
// <path fill="#5000ca" fill-opacity="1" d="M0,224L7.7,208C15.5,192,31,160,46,149.3C61.9,139,77,149,93,138.7C108.4,128,124,96,139,90.7C154.8,85,170,107,186,122.7C201.3,139,217,149,232,154.7C247.7,160,263,160,279,154.7C294.2,149,310,139,325,165.3C340.6,192,356,256,372,245.3C387.1,235,403,149,418,144C433.5,139,449,213,465,208C480,203,495,117,511,101.3C526.5,85,542,139,557,160C572.9,181,588,171,604,144C619.4,117,635,75,650,90.7C665.8,107,681,181,697,192C712.3,203,728,149,743,133.3C758.7,117,774,139,790,170.7C805.2,203,821,245,836,229.3C851.6,213,867,139,883,101.3C898.1,64,914,64,929,106.7C944.5,149,960,235,975,250.7C991,267,1006,213,1022,208C1037.4,203,1053,245,1068,234.7C1083.9,224,1099,160,1115,144C1130.3,128,1146,160,1161,160C1176.8,160,1192,128,1208,149.3C1223.2,171,1239,245,1254,261.3C1269.7,277,1285,235,1301,202.7C1316.1,171,1332,149,1347,133.3C1362.6,117,1378,107,1394,90.7C1409,75,1425,53,1432,42.7L1440,32L1440,320L1432.3,320C1424.5,320,1409,320,1394,320C1378.1,320,1363,320,1347,320C1331.6,320,1316,320,1301,320C1285.2,320,1270,320,1254,320C1238.7,320,1223,320,1208,320C1192.3,320,1177,320,1161,320C1145.8,320,1130,320,1115,320C1099.4,320,1084,320,1068,320C1052.9,320,1037,320,1022,320C1006.5,320,991,320,975,320C960,320,945,320,929,320C913.5,320,898,320,883,320C867.1,320,852,320,836,320C820.6,320,805,320,790,320C774.2,320,759,320,743,320C727.7,320,712,320,697,320C681.3,320,666,320,650,320C634.8,320,619,320,604,320C588.4,320,573,320,557,320C541.9,320,526,320,511,320C495.5,320,480,320,465,320C449,320,434,320,418,320C402.6,320,387,320,372,320C356.1,320,341,320,325,320C309.7,320,294,320,279,320C263.2,320,248,320,232,320C216.8,320,201,320,186,320C170.3,320,155,320,139,320C123.9,320,108,320,93,320C77.4,320,62,320,46,320C31,320,15,320,8,320L0,320Z"></path>
// <path fill="#5000ca" fill-opacity="1" d="M0,0L7.7,37.3C15.5,75,31,149,46,160C61.9,171,77,117,93,90.7C108.4,64,124,64,139,80C154.8,96,170,128,186,128C201.3,128,217,96,232,117.3C247.7,139,263,213,279,240C294.2,267,310,245,325,224C340.6,203,356,181,372,192C387.1,203,403,245,418,224C433.5,203,449,117,465,80C480,43,495,53,511,90.7C526.5,128,542,192,557,202.7C572.9,213,588,171,604,144C619.4,117,635,107,650,96C665.8,85,681,75,697,96C712.3,117,728,171,743,181.3C758.7,192,774,160,790,165.3C805.2,171,821,213,836,197.3C851.6,181,867,107,883,80C898.1,53,914,75,929,101.3C944.5,128,960,160,975,149.3C991,139,1006,85,1022,74.7C1037.4,64,1053,96,1068,133.3C1083.9,171,1099,213,1115,229.3C1130.3,245,1146,235,1161,197.3C1176.8,160,1192,96,1208,85.3C1223.2,75,1239,117,1254,117.3C1269.7,117,1285,75,1301,101.3C1316.1,128,1332,224,1347,218.7C1362.6,213,1378,107,1394,85.3C1409,64,1425,128,1432,160L1440,192L1440,320L1432.3,320C1424.5,320,1409,320,1394,320C1378.1,320,1363,320,1347,320C1331.6,320,1316,320,1301,320C1285.2,320,1270,320,1254,320C1238.7,320,1223,320,1208,320C1192.3,320,1177,320,1161,320C1145.8,320,1130,320,1115,320C1099.4,320,1084,320,1068,320C1052.9,320,1037,320,1022,320C1006.5,320,991,320,975,320C960,320,945,320,929,320C913.5,320,898,320,883,320C867.1,320,852,320,836,320C820.6,320,805,320,790,320C774.2,320,759,320,743,320C727.7,320,712,320,697,320C681.3,320,666,320,650,320C634.8,320,619,320,604,320C588.4,320,573,320,557,320C541.9,320,526,320,511,320C495.5,320,480,320,465,320C449,320,434,320,418,320C402.6,320,387,320,372,320C356.1,320,341,320,325,320C309.7,320,294,320,279,320C263.2,320,248,320,232,320C216.8,320,201,320,186,320C170.3,320,155,320,139,320C123.9,320,108,320,93,320C77.4,320,62,320,46,320C31,320,15,320,8,320L0,320Z"></path>
// <path fill="#5000ca" fill-opacity="1" d="M0,160L7.7,133.3C15.5,107,31,53,46,32C61.9,11,77,21,93,42.7C108.4,64,124,96,139,96C154.8,96,170,64,186,85.3C201.3,107,217,181,232,192C247.7,203,263,149,279,160C294.2,171,310,245,325,240C340.6,235,356,149,372,122.7C387.1,96,403,128,418,128C433.5,128,449,96,465,96C480,96,495,128,511,138.7C526.5,149,542,139,557,144C572.9,149,588,171,604,160C619.4,149,635,107,650,106.7C665.8,107,681,149,697,186.7C712.3,224,728,256,743,224C758.7,192,774,96,790,96C805.2,96,821,192,836,245.3C851.6,299,867,309,883,288C898.1,267,914,213,929,165.3C944.5,117,960,75,975,85.3C991,96,1006,160,1022,181.3C1037.4,203,1053,181,1068,160C1083.9,139,1099,117,1115,138.7C1130.3,160,1146,224,1161,240C1176.8,256,1192,224,1208,224C1223.2,224,1239,256,1254,240C1269.7,224,1285,160,1301,149.3C1316.1,139,1332,181,1347,186.7C1362.6,192,1378,160,1394,165.3C1409,171,1425,213,1432,234.7L1440,256L1440,320L1432.3,320C1424.5,320,1409,320,1394,320C1378.1,320,1363,320,1347,320C1331.6,320,1316,320,1301,320C1285.2,320,1270,320,1254,320C1238.7,320,1223,320,1208,320C1192.3,320,1177,320,1161,320C1145.8,320,1130,320,1115,320C1099.4,320,1084,320,1068,320C1052.9,320,1037,320,1022,320C1006.5,320,991,320,975,320C960,320,945,320,929,320C913.5,320,898,320,883,320C867.1,320,852,320,836,320C820.6,320,805,320,790,320C774.2,320,759,320,743,320C727.7,320,712,320,697,320C681.3,320,666,320,650,320C634.8,320,619,320,604,320C588.4,320,573,320,557,320C541.9,320,526,320,511,320C495.5,320,480,320,465,320C449,320,434,320,418,320C402.6,320,387,320,372,320C356.1,320,341,320,325,320C309.7,320,294,320,279,320C263.2,320,248,320,232,320C216.8,320,201,320,186,320C170.3,320,155,320,139,320C123.9,320,108,320,93,320C77.4,320,62,320,46,320C31,320,15,320,8,320L0,320Z"></path>
// <path fill="#5000ca" fill-opacity="1" d="M0,128L7.7,144C15.5,160,31,192,46,202.7C61.9,213,77,203,93,208C108.4,213,124,235,139,213.3C154.8,192,170,128,186,112C201.3,96,217,128,232,128C247.7,128,263,96,279,90.7C294.2,85,310,107,325,96C340.6,85,356,43,372,58.7C387.1,75,403,149,418,176C433.5,203,449,181,465,192C480,203,495,245,511,250.7C526.5,256,542,224,557,181.3C572.9,139,588,85,604,96C619.4,107,635,181,650,202.7C665.8,224,681,192,697,154.7C712.3,117,728,75,743,80C758.7,85,774,139,790,138.7C805.2,139,821,85,836,96C851.6,107,867,181,883,176C898.1,171,914,85,929,80C944.5,75,960,149,975,181.3C991,213,1006,203,1022,197.3C1037.4,192,1053,192,1068,170.7C1083.9,149,1099,107,1115,128C1130.3,149,1146,235,1161,240C1176.8,245,1192,171,1208,154.7C1223.2,139,1239,181,1254,186.7C1269.7,192,1285,160,1301,133.3C1316.1,107,1332,85,1347,80C1362.6,75,1378,85,1394,80C1409,75,1425,53,1432,42.7L1440,32L1440,320L1432.3,320C1424.5,320,1409,320,1394,320C1378.1,320,1363,320,1347,320C1331.6,320,1316,320,1301,320C1285.2,320,1270,320,1254,320C1238.7,320,1223,320,1208,320C1192.3,320,1177,320,1161,320C1145.8,320,1130,320,1115,320C1099.4,320,1084,320,1068,320C1052.9,320,1037,320,1022,320C1006.5,320,991,320,975,320C960,320,945,320,929,320C913.5,320,898,320,883,320C867.1,320,852,320,836,320C820.6,320,805,320,790,320C774.2,320,759,320,743,320C727.7,320,712,320,697,320C681.3,320,666,320,650,320C634.8,320,619,320,604,320C588.4,320,573,320,557,320C541.9,320,526,320,511,320C495.5,320,480,320,465,320C449,320,434,320,418,320C402.6,320,387,320,372,320C356.1,320,341,320,325,320C309.7,320,294,320,279,320C263.2,320,248,320,232,320C216.8,320,201,320,186,320C170.3,320,155,320,139,320C123.9,320,108,320,93,320C77.4,320,62,320,46,320C31,320,15,320,8,320L0,320Z"></path>
// <path fill="#5000ca" fill-opacity="1" d="M0,256L7.7,229.3C15.5,203,31,149,46,117.3C61.9,85,77,75,93,106.7C108.4,139,124,213,139,218.7C154.8,224,170,160,186,144C201.3,128,217,160,232,170.7C247.7,181,263,171,279,154.7C294.2,139,310,117,325,133.3C340.6,149,356,203,372,208C387.1,213,403,171,418,160C433.5,149,449,171,465,186.7C480,203,495,213,511,192C526.5,171,542,117,557,101.3C572.9,85,588,107,604,96C619.4,85,635,43,650,32C665.8,21,681,43,697,85.3C712.3,128,728,192,743,229.3C758.7,267,774,277,790,240C805.2,203,821,117,836,117.3C851.6,117,867,203,883,218.7C898.1,235,914,181,929,160C944.5,139,960,149,975,176C991,203,1006,245,1022,266.7C1037.4,288,1053,288,1068,250.7C1083.9,213,1099,139,1115,133.3C1130.3,128,1146,192,1161,213.3C1176.8,235,1192,213,1208,170.7C1223.2,128,1239,64,1254,85.3C1269.7,107,1285,213,1301,256C1316.1,299,1332,277,1347,256C1362.6,235,1378,213,1394,176C1409,139,1425,85,1432,58.7L1440,32L1440,320L1432.3,320C1424.5,320,1409,320,1394,320C1378.1,320,1363,320,1347,320C1331.6,320,1316,320,1301,320C1285.2,320,1270,320,1254,320C1238.7,320,1223,320,1208,320C1192.3,320,1177,320,1161,320C1145.8,320,1130,320,1115,320C1099.4,320,1084,320,1068,320C1052.9,320,1037,320,1022,320C1006.5,320,991,320,975,320C960,320,945,320,929,320C913.5,320,898,320,883,320C867.1,320,852,320,836,320C820.6,320,805,320,790,320C774.2,320,759,320,743,320C727.7,320,712,320,697,320C681.3,320,666,320,650,320C634.8,320,619,320,604,320C588.4,320,573,320,557,320C541.9,320,526,320,511,320C495.5,320,480,320,465,320C449,320,434,320,418,320C402.6,320,387,320,372,320C356.1,320,341,320,325,320C309.7,320,294,320,279,320C263.2,320,248,320,232,320C216.8,320,201,320,186,320C170.3,320,155,320,139,320C123.9,320,108,320,93,320C77.4,320,62,320,46,320C31,320,15,320,8,320L0,320Z"></path>
// <path fill="#5000ca" fill-opacity="1" d="M0,96L9.6,117.3C19.2,139,38,181,58,202.7C76.8,224,96,224,115,218.7C134.4,213,154,203,173,218.7C192,235,211,277,230,256C249.6,235,269,149,288,133.3C307.2,117,326,171,346,186.7C364.8,203,384,181,403,186.7C422.4,192,442,224,461,240C480,256,499,256,518,240C537.6,224,557,192,576,149.3C595.2,107,614,53,634,48C652.8,43,672,85,691,90.7C710.4,96,730,64,749,90.7C768,117,787,203,806,229.3C825.6,256,845,224,864,186.7C883.2,149,902,107,922,117.3C940.8,128,960,192,979,186.7C998.4,181,1018,107,1037,64C1056,21,1075,11,1094,48C1113.6,85,1133,171,1152,208C1171.2,245,1190,235,1210,218.7C1228.8,203,1248,181,1267,149.3C1286.4,117,1306,75,1325,96C1344,117,1363,203,1382,218.7C1401.6,235,1421,181,1430,154.7L1440,128L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"></path>
// <path fill="#5000ca" fill-opacity="1" d="M0,128L9.6,128C19.2,128,38,128,58,149.3C76.8,171,96,213,115,229.3C134.4,245,154,235,173,197.3C192,160,211,96,230,69.3C249.6,43,269,53,288,90.7C307.2,128,326,192,346,218.7C364.8,245,384,235,403,245.3C422.4,256,442,288,461,298.7C480,309,499,299,518,293.3C537.6,288,557,288,576,282.7C595.2,277,614,267,634,250.7C652.8,235,672,213,691,197.3C710.4,181,730,171,749,176C768,181,787,203,806,186.7C825.6,171,845,117,864,133.3C883.2,149,902,235,922,229.3C940.8,224,960,128,979,80C998.4,32,1018,32,1037,32C1056,32,1075,32,1094,37.3C1113.6,43,1133,53,1152,69.3C1171.2,85,1190,107,1210,122.7C1228.8,139,1248,149,1267,170.7C1286.4,192,1306,224,1325,234.7C1344,245,1363,235,1382,234.7C1401.6,235,1421,245,1430,250.7L1440,256L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"></path>
// <path fill="#5000ca" fill-opacity="1" d="M0,96L9.6,80C19.2,64,38,32,58,64C76.8,96,96,192,115,224C134.4,256,154,224,173,192C192,160,211,128,230,101.3C249.6,75,269,53,288,85.3C307.2,117,326,203,346,218.7C364.8,235,384,181,403,149.3C422.4,117,442,107,461,133.3C480,160,499,224,518,256C537.6,288,557,288,576,250.7C595.2,213,614,139,634,96C652.8,53,672,43,691,48C710.4,53,730,75,749,112C768,149,787,203,806,208C825.6,213,845,171,864,144C883.2,117,902,107,922,117.3C940.8,128,960,160,979,170.7C998.4,181,1018,171,1037,165.3C1056,160,1075,160,1094,176C1113.6,192,1133,224,1152,229.3C1171.2,235,1190,213,1210,213.3C1228.8,213,1248,235,1267,218.7C1286.4,203,1306,149,1325,122.7C1344,96,1363,96,1382,106.7C1401.6,117,1421,139,1430,149.3L1440,160L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"></path>
// <path fill="#5000ca" fill-opacity="1" d="M0,64L9.6,90.7C19.2,117,38,171,58,170.7C76.8,171,96,117,115,117.3C134.4,117,154,171,173,170.7C192,171,211,117,230,106.7C249.6,96,269,128,288,160C307.2,192,326,224,346,245.3C364.8,267,384,277,403,266.7C422.4,256,442,224,461,202.7C480,181,499,171,518,170.7C537.6,171,557,181,576,170.7C595.2,160,614,128,634,144C652.8,160,672,224,691,213.3C710.4,203,730,117,749,101.3C768,85,787,139,806,154.7C825.6,171,845,149,864,154.7C883.2,160,902,192,922,218.7C940.8,245,960,267,979,272C998.4,277,1018,267,1037,229.3C1056,192,1075,128,1094,117.3C1113.6,107,1133,149,1152,176C1171.2,203,1190,213,1210,208C1228.8,203,1248,181,1267,181.3C1286.4,181,1306,203,1325,213.3C1344,224,1363,224,1382,224C1401.6,224,1421,224,1430,224L1440,224L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"></path>
// <path fill="#5000ca" fill-opacity="1" d="M0,224L9.6,197.3C19.2,171,38,117,58,80C76.8,43,96,21,115,53.3C134.4,85,154,171,173,186.7C192,203,211,149,230,144C249.6,139,269,181,288,176C307.2,171,326,117,346,112C364.8,107,384,149,403,138.7C422.4,128,442,64,461,42.7C480,21,499,43,518,96C537.6,149,557,235,576,240C595.2,245,614,171,634,149.3C652.8,128,672,160,691,176C710.4,192,730,192,749,160C768,128,787,64,806,53.3C825.6,43,845,85,864,122.7C883.2,160,902,192,922,192C940.8,192,960,160,979,149.3C998.4,139,1018,149,1037,165.3C1056,181,1075,203,1094,186.7C1113.6,171,1133,117,1152,106.7C1171.2,96,1190,128,1210,170.7C1228.8,213,1248,267,1267,266.7C1286.4,267,1306,213,1325,202.7C1344,192,1363,224,1382,245.3C1401.6,267,1421,277,1430,282.7L1440,288L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"></path>
// <path fill="#5000ca" fill-opacity="1" d="M0,96L9.6,112C19.2,128,38,160,58,165.3C76.8,171,96,149,115,128C134.4,107,154,85,173,90.7C192,96,211,128,230,122.7C249.6,117,269,75,288,85.3C307.2,96,326,160,346,192C364.8,224,384,224,403,202.7C422.4,181,442,139,461,133.3C480,128,499,160,518,192C537.6,224,557,256,576,261.3C595.2,267,614,245,634,234.7C652.8,224,672,224,691,192C710.4,160,730,96,749,96C768,96,787,160,806,186.7C825.6,213,845,203,864,197.3C883.2,192,902,192,922,192C940.8,192,960,192,979,170.7C998.4,149,1018,107,1037,74.7C1056,43,1075,21,1094,16C1113.6,11,1133,21,1152,53.3C1171.2,85,1190,139,1210,154.7C1228.8,171,1248,149,1267,117.3C1286.4,85,1306,43,1325,32C1344,21,1363,43,1382,90.7C1401.6,139,1421,213,1430,250.7L1440,288L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"></path>
// <path fill="#5000ca" fill-opacity="1" d="M0,288L9.6,288C19.2,288,38,288,58,293.3C76.8,299,96,309,115,282.7C134.4,256,154,192,173,149.3C192,107,211,85,230,112C249.6,139,269,213,288,213.3C307.2,213,326,139,346,96C364.8,53,384,43,403,74.7C422.4,107,442,181,461,213.3C480,245,499,235,518,229.3C537.6,224,557,224,576,224C595.2,224,614,224,634,192C652.8,160,672,96,691,85.3C710.4,75,730,117,749,149.3C768,181,787,203,806,181.3C825.6,160,845,96,864,106.7C883.2,117,902,203,922,229.3C940.8,256,960,224,979,197.3C998.4,171,1018,149,1037,138.7C1056,128,1075,128,1094,138.7C1113.6,149,1133,171,1152,149.3C1171.2,128,1190,64,1210,48C1228.8,32,1248,64,1267,69.3C1286.4,75,1306,53,1325,42.7C1344,32,1363,32,1382,53.3C1401.6,75,1421,117,1430,138.7L1440,160L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"></path>
// <path fill="#5000ca" fill-opacity="1" d="M0,256L9.6,229.3C19.2,203,38,149,58,154.7C76.8,160,96,224,115,256C134.4,288,154,288,173,250.7C192,213,211,139,230,106.7C249.6,75,269,85,288,85.3C307.2,85,326,75,346,64C364.8,53,384,43,403,58.7C422.4,75,442,117,461,133.3C480,149,499,139,518,128C537.6,117,557,107,576,133.3C595.2,160,614,224,634,229.3C652.8,235,672,181,691,144C710.4,107,730,85,749,96C768,107,787,149,806,186.7C825.6,224,845,256,864,234.7C883.2,213,902,139,922,133.3C940.8,128,960,192,979,186.7C998.4,181,1018,107,1037,96C1056,85,1075,139,1094,138.7C1113.6,139,1133,85,1152,58.7C1171.2,32,1190,32,1210,64C1228.8,96,1248,160,1267,192C1286.4,224,1306,224,1325,234.7C1344,245,1363,267,1382,256C1401.6,245,1421,203,1430,181.3L1440,160L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"></path>
// </g>
// </svg>`


// import React from 'react';
// import { SvgXml } from 'react-native-svg';
// import waves from '../utils/waves.svg';

// interface Props {
//     color: string;
// }

// class Waves extends React.Component<Props, {}> {
//     render() {
//         return (
//             <SvgXml xml={waves} width='100%' height='100%' fill={this.props.color} />
//         )
//     }
// }

// export default Waves;


        // {/* <GlobalStyles styles={(GlobalStyles) => ({
        //   waves: {
        //     position: "relative",
        //     width: "100%",
        //     height: "15vh",
        //     marginBottom: "-7px", /*Fix for safari gap*/
        //     minHeight: "100px",
        //     maxHeight: "150px",
        //   }
        // })} /> */}