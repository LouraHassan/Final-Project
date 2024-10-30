import { useState } from "react";
import Footer from "../Components/Footer";
import HomeNav from "../Components/HomeNav";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import axios from "axios";
import StepsCard from "../Components/HomeComponents/StepsCard";
import FeaturesCard from "../Components/HomeComponents/FeaturesCard";
import BenefitsCard from "../Components/HomeComponents/BenefitsCard";
import QuestionCard from "../Components/HomeComponents/QuestionCard";
import SectionTitle from "../Components/HomeComponents/SectionTitle";

function Home() {
  let [senderEmail, setSenderEmail] = useState("");
  let [contactTitle, setContactTitle] = useState("");
  let [msg, setMsg] = useState("");
  let [senderName, setSenderName] = useState("");
  const [warningText, setWarningText] = useState("");

  function sendEmail() {
    var data = {
      service_id: "service_s8jk25h",
      template_id: "template_rz2zfss",
      user_id: "KQE-OJj9b2kAySp7m",
      template_params: {
        from_name: senderName,
        to_name: "Merge-Net Team",
        reply_to: senderEmail,
        message: msg,
        msg_title: contactTitle,
      },
    };

    if (
      senderEmail !== "" &&
      contactTitle !== "" &&
      msg !== "" &&
      senderName !== ""
    ) {
      setSenderEmail("");
      setContactTitle("");
      setMsg("");
      setSenderName("");
      axios
        .post("https://api.emailjs.com/api/v1.0/email/send", data)
        .then((res) => console.log(res));
    } else {
      setWarningText("Please fill all the fields");
    }
  }

  return (
    <div className="w-full">
      <HomeNav></HomeNav>
      <div className="p-8 md:p-10 w-full h-[90vh] justify-around  md:h-[88vh] flex flex-col  md:justify-center items-center">
        <div className="z-10 flex flex-col  items-center md:items-start justify-between md:my-10 md:absolute  md:top-24 md:left-10 lg:w-[70vw]">
          <p className="text-4xl text-center md:text-left font-semibold md:text-5xl text-secondary my-10">
            Streamline Employee Placement Across Departments After Mergers
          </p>
          <p className="text-xl text-center md:text-left md:w-[50vw] md:text-2xl text-accent my-2 md:my-4 ">
            Manage employee roles, track department needs, and optimize talent
            allocation seamlessly
          </p>
        </div>
        <Link
          to={`/signup`}
          className="btn my-5  md:mx-6 md:my-10 btn-accent btn-lg md:self-center md:absolute md:left-10 md:bottom-10 z-20"
        >
          Start Now!
        </Link>

    
        <div className="custom-shape-divider-bottom-1729943384 hidden md:block">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div id="about-us" className="px-10 py-8 md:px-20 md:py-20 bg-secondary">
        <div className="grid lg:grid-cols-2 my-4">
          <div className="flex flex-col items-center md:items-start">
          <SectionTitle title='ABOUT US' color={'text-primary'}></SectionTitle>

            <p className="text-primary text-center md:text-left font-text text-md tracking-wide m-4">
              At MergeNet, we specialize in optimizing workforce management
              following the merger of companies or startups. Our platform is
              designed to streamline the process of integrating employees into
              new departments, ensuring that every individual is placed where
              they can contribute most effectively.
            </p>
          </div>
          <div className=" flex items-center justify-around">
            <img src={logo} alt="logo" className="w-[10vw] " />
          </div>
        </div>
      </div>
      <div
        id="how-it-works"
        className="px-10 py-8 md:px-20 md:py-20 bg-base-100 flex flex-col items-center md:items-start"
      >
                                        <SectionTitle title='HOW IT WORKS' color={'text-secondary'}></SectionTitle>

     
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
          <StepsCard
            number={1}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle text-secondary"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg>
            }
            text="Recruiter creates his account"
          ></StepsCard>
          <StepsCard
            number={2}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-users-group text-secondary"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
              </svg>
            }
            text="Recruiter creates accounts for managers and employees"
          ></StepsCard>
          <StepsCard
            number={3}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-category-plus text-secondary"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4h6v6h-6zm10 0h6v6h-6zm-10 10h6v6h-6zm10 3h6m-3 -3v6" />
              </svg>
            }
            text="Recruiter adds company's departments"
          ></StepsCard>
          <StepsCard
            number={4}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase text-secondary"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                <path d="M12 12l0 .01" />
                <path d="M3 13a20 20 0 0 0 18 0" />
              </svg>
            }
            text="Managers post missing position in each department"
          ></StepsCard>
          <StepsCard
            number={5}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-user-check text-secondary"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                <path d="M15 19l2 2l4 -4" />
              </svg>
            }
            text="Recruiter assigns best fit employee to positions"
          ></StepsCard>
          <StepsCard
            number={6}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-bell-ringing text-secondary"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
              </svg>
            }
            text="Employee and manager get notification on position update"
          ></StepsCard>
        </div>
      </div>
      <div
        id="key-features"
        className="px-10 py-8 md:px-20 md:py-20 bg-base-200 flex flex-col items-center"
      >
                                <SectionTitle title='KEY FEATURES' color={'text-secondary'}></SectionTitle>

       
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-20 lg:w-[80vw] my-5">
          <FeaturesCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-user-check text-accent"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                <path d="M15 19l2 2l4 -4" />
              </svg>
            }
            title='Smart Role Matching'
            text='Automatically match employees based on their experience and
              skills.'
          ></FeaturesCard>
           <FeaturesCard
            icon={
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-bell-ringing text-accent"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
              <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
            </svg>
            }
            title='Real-Time Notifications'
            text='Ensure everyone stays informed about employee transitions.'
          ></FeaturesCard>
          <FeaturesCard
            icon={
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chart-pie text-accent"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" />
              <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
            </svg>
            }
            title='Advanced Analytics'
            text='Provide recruiters with insights into department staffing and
              employee shifts.'
          ></FeaturesCard>
           <FeaturesCard
            icon={
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase text-accent"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 12l0 .01" />
              <path d="M3 13a20 20 0 0 0 18 0" />
            </svg>
            }
            title='Department Vacancy Management'
            text='Managers can post job openings, specifying skills and
              qualifications needed to fill staffing gaps.'
          ></FeaturesCard>
         
        </div>
      </div>
      <div
        id="benefits"
        className="px-10 py-8 md:px-20 md:py-20 bg-base-100 flex flex-col items-center"
      >
                        <SectionTitle title='BENEFITS' color={'text-secondary'}></SectionTitle>

       
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-20 lg:w-[80vw] my-5">
          <BenefitsCard icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-up text-secondary m-5"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 3l0 18" />
              <path d="M4 6l3 -3l3 3" />
              <path d="M20 6l-3 -3l-3 3" />
              <path d="M7 3l0 18" />
            </svg>
          }
            title='For Recruiters'
            text='Improve workforce efficiency by filling roles quickly and
              optimizing talent distribution.'
          ></BenefitsCard>
          <BenefitsCard icon={
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-user-scan text-secondary m-5"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
            <path d="M4 16v2a2 2 0 0 0 2 2h2" />
            <path d="M16 4h2a2 2 0 0 1 2 2v2" />
            <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
            <path d="M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
          </svg>
          }
            title='For Managers'
            text='Ensure department needs are met and maintain optimal staffing
              levels.'
          ></BenefitsCard>
        <BenefitsCard icon={
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-user-check text-secondary m-5"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
            <path d="M15 19l2 2l4 -4" />
          </svg>
          }
            title='For Employees'
            text='Get placed in departments that suit your skills and receive clear
              updates on your position.'
          ></BenefitsCard>
       
        </div>
      </div>
      <div
        id="faq"
        className="px-10 py-8 md:px-20 md:py-20 bg-secondary flex flex-col items-center"
      >
                <SectionTitle title='FAQ' color={'text-primary'}></SectionTitle>

      
        <div className="lg:w-[80vw]">
          <QuestionCard q='How does the employee reassignment process work?' a='Admin can assign best match employees for missing positions
                across departments based of their experience and skills'></QuestionCard>
          <QuestionCard q='Can employees update their own skills?' a=' Yes, each employee has the ability to add, update, or delete his
                skills'></QuestionCard>
        <QuestionCard q='How do managers post vacancies?' a="By clicking on ‘Add position’ action button, managers can add
                all details for needed position to ensure getting the perfect
                fit"></QuestionCard>
        
        </div>
      </div>
      <div
        id="contact-us"
        className="px-10 py-8 md:px-20 md:py-20 bg-base-200 flex flex-col items-center"
      >
        <SectionTitle title='CONTACT US' color={'text-secondary'}></SectionTitle>
       
        <div className="my-4 flex flex-col items-center">
          <div className="flex flex-col md:flex-row w-full">
            <input
              onChange={(e) => {
                setSenderName(e.target.value);
              }}
              value={senderName}
              type="text"
              placeholder="Name"
              className="input input-bordered lg:w-[20vw] w-full mr-2 my-2"
            />
            <input
              onChange={(e) => {
                setSenderEmail(e.target.value);
              }}
              value={senderEmail}
              type="text"
              placeholder="Email"
              className="input input-bordered lg:w-[20vw] w-full my-2"
            />
          </div>
          <input
            onChange={(e) => {
              setContactTitle(e.target.value);
            }}
            value={contactTitle}
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full lg:w-[40vw] my-2"
          />
          <textarea
            value={msg}
            type="text"
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            placeholder="Subject"
            className="textarea textarea-bordered w-full lg:w-[40vw] my-2"
            rows={8}
            style={{ resize: "none" }}
          />

          <p className="text-error my-2">{warningText}</p>
          <button className="btn btn-accent btn-wide" onClick={sendEmail}>
            Send
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
