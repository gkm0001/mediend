"use client";
import { Carousel } from "@mantine/carousel";
import { Box, Image, rem, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./OurDoctors.module.css";
const doctorsData = [
  {
    img: "/assets/doctors/doctor_1.png",
    name: "Dr. Prof. A Murali ",
    domain: "MBBS, MD-General Medicine Gastroenterologist ",
    experience: 41,
  },
  {
    img: "/assets/doctors/doctor_2.png",
    name: "Dr. R. Deepak",
    domain: "MBBS, MS - General Surgery Urologist",
    experience: 16,
  },
  {
    img: "/assets/doctors/doctor_3.png",
    name: "Dr. Ramesh Benguluri",
    domain: "MS- Orthopaedics Orthopedic surgeon",
    experience: 11,
  },
  {
    img: "/assets/doctors/doctor_4.png",
    name: "Dr. Murali Krishna Menon",
    domain: "MBBS, MD - General Medicine Neurologist",
    experience: 31,
  },
  {
    img: "/assets/doctors/doctor_1.png",
    name: "Dr. Prof. A Murali ",
    domain: "MBBS, MD-General Medicine Gastroenterologist ",
    experience: 41,
  },
  {
    img: "/assets/doctors/doctor_2.png",
    name: "Dr. R. Deepak",
    domain: "MBBS, MS - General Surgery Urologist",
    experience: 16,
  },
  {
    img: "/assets/doctors/doctor_3.png",
    name: "Dr. Ramesh Benguluri",
    domain: "MS- Orthopaedics Orthopedic surgeon",
    experience: 11,
  },
  {
    img: "/assets/doctors/doctor_4.png",
    name: "Dr. Murali Krishna Menon",
    domain: "MBBS, MD - General Medicine Neurologist",
    experience: 31,
  },
];
const OurDoctors = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <Box my={50}>
      <Title ta="center" c="#1D3557" fz={rem(48)} data-aos="zoom-in-up">
        Meet Our Talented Doctors
      </Title>
      <Text ta="center" c="#6D758F" maw={400} m="20px auto">
        Meet our experienced doctors dedicated to providing exceptional care and innovative treatments.
      </Text>
      <Box className={classes.carousel_main}>
        <Carousel
          slideSize={{ base: "100%", sm: "fit-content" }}
          slideGap={{ base: "xl", sm: 2 }}
          align="start"
          slidesToScroll={1}
          loop={true}
          classNames={{ root: classes.carousel__root }}
        >
          {doctorsData.map(
            (
              el: {
                img: string;
                name: string;
                domain: string;
                experience: number;
              },
              index: number
            ) => (
              <Carousel.Slide key={index} className={classes.box}>
                <Image
                  src={el.img}
                  height={236}
                  fit="contain"
                  alt={el.name}
                  data-aos={index % 2 ? "zoom-in-up" : "zoom-in-down"}
                />
                <Box my={20}>
                  <Text c="#023E8A" px={10} fz={rem(20)}>
                    {el.name}
                  </Text>
                  <Text c="#999999" my={10} px={10} className={classes.domain}>
                    {el.domain}
                  </Text>
                  <Text c="#999999" px={10}>
                    {el.experience}+ Years experience
                  </Text>
                </Box>
              </Carousel.Slide>
            )
          )}
        </Carousel>
      </Box>
    </Box>
  );
};
export default OurDoctors;
