import Slider from "react-slick";
import {
  Container,
  SectionBadge,
  SectionTitle,
  TestimonialCard,
} from "@components";
import settings from "@/libs/sliderSetting";
export default function Testimoni() {
  return (
    <section className="py-20 lg:py-40">
      <Container>
        <div className="-mx-6 flex flex-wrap">
          <div className="w-full px-6 lg:w-6/12">
            <SectionBadge>Pendapat</SectionBadge>
            <SectionTitle>
              Apa kata orang lain tentang{" "}
              <span className="font-semibold">OSIS</span>?
            </SectionTitle>
          </div>
        </div>
        <Slider className="mt-16" {...settings}>
          <TestimonialCard
            testimoni={'"Kita resmi menamatkan game membuat web"'}
            avatar="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
            name="Ilham Kurniawan"
            job="Langganan Bang Windah"
          />
          <TestimonialCard
            testimoni={'"GG Gaming Ga Guys?"'}
            avatar="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
            name="Windah Basudara"
            job="Youtuber Gaming"
          />
          <TestimonialCard
            testimoni={'"Gamer ganteng idaman"'}
            avatar="https://images.unsplash.com/photo-1599566147214-ce487862ea4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
            name="Reza Pardede"
            job="Yotuber No 1"
          />
          <TestimonialCard
            testimoni={'"Chotomate kudasai"'}
            avatar="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
            name="Regi Halimawan"
            job="Youtuber No Toxic"
          />
        </Slider>
      </Container>
    </section>
  );
}
