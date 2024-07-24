"use client";
import { Image } from "@nextui-org/react";

function About({ dictionary }) {
  return (
    <div className="about-content flex justify-between items-center px-10">
      <div className="about-me basis-6/12 flex flex-col gap-10">
        <h1 className="font-bold text-4xl">
          {`${dictionary.about.title} ${dictionary.about.name} `}
        </h1>
        <p className="text-xl leading-9 text-justify">
          {dictionary.about.description}
        </p>
      </div>
      <div className="image basis-4/12">
        <Image
          src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/449924075_3406024129542615_3570865297221834787_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEnjYSzd2jGCGd-v643vDxYg7o49zvvkdqDujj3O--R2s1tkxk_YeC5l2RqIq1BV61t2XF78-CoZZ5KukeQBmRq&_nc_ohc=UYuHLGNcJb4Q7kNvgHrEMLi&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDoQm10mJJNcxWxLZh1llRnN9r9WCE26WO3EETTe62KsQ&oe=66A64644"
          alt="Phan Van Hai"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
export default About;
