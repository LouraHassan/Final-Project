import React from "react";
import Footer from "../Components/Footer";
import HomeNav from "../Components/HomeNav";
import { Link } from "react-router-dom";
import logo from "/logo.png";

function Home() {
  return (
    <div className="w-full">
      <HomeNav></HomeNav>
      <div
        className="lg:w-full h-screen flex flex-col justify-center items-center"
      >
        <div className="z-10 flex flex-col items-center justify-between my-10 absolute top-24 left-10 lg:w-[70vw]">
          <p className="text-4xl text-left mx-2 md:mx-6 md:text-5xl text-secondary my-5">Streamline Employee Placement Across Departments After Mergers</p>
          <p className="text-xl text-left mx-6 md:text-2xl text-accent my-4 font-semibold">Manage employee roles, track department needs, and optimize talent allocation seamlessly</p>
              </div>
          <Link to={`/signup`} className="btn self-start mx-6 my-10 btn-accent btn-lg md:self-center absolute left-10 bottom-20 md:bottom-10 z-20">Start Now!</Link>
       
          <div class="custom-shape-divider-bottom-1729945068 md:hidden">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
    </svg>
</div>
              <div className="custom-shape-divider-bottom-1729943384 hidden md:block">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
    </svg>
</div>
      </div>

      <div id="about-us" className="p-10 md:p-20 bg-secondary">
        <div className="grid lg:grid-cols-2 my-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-primary font-title font-bold tracking-wider text-xl border-b-4 border-accent inline-block my-5">
              ABOUT US
            </p>
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
        className="p-10 md:p-20 bg-base-100 flex flex-col items-center md:items-start"
      >
        <p className="text-secondary font-title font-bold tracking-wider text-xl border-b-4 border-accent inline-block my-10">
          HOW IT WORKS
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 my-5">
          <div>
            <div className="flex items-center">
              <p className="font-bold text-2xl m-4 text-accent">1</p>
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
            </div>
            <p className="m-4 font-text">Recruiter creates his account</p>
          </div>
          <div>
            <div className="flex items-center">
              <p className="font-bold text-2xl m-4 text-accent">2</p>
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
            </div>
            <p className="m-4 font-text">
              Recruiter creates accounts for managers and employees
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <p className="font-bold text-2xl m-4 text-accent">3</p>
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
            </div>
            <p className="m-4 font-text">
              Recruiter adds company's departments
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <p className="font-bold text-2xl m-4 text-accent">4</p>
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
            </div>
            <p className="m-4 font-text">
              Managers post missing position in each department
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <p className="font-bold text-2xl m-4 text-accent">5</p>
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
            </div>
            <p className="m-4 font-text">
              Recruiter assigns best fit employee to positions
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <p className=" font-bold text-2xl m-4 text-accent">6</p>
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
            </div>
            <p className="m-4 font-text">
              Employee and manager get notification on position update
            </p>
          </div>
        </div>
      </div>
      <div
        id="key-features"
        className="p-10 md:p-20 bg-base-200 flex flex-col items-center"
      >
        <p className="md:self-start text-secondary font-title font-bold tracking-wider text-xl border-b-4 border-accent inline-block my-10">
          KEY FEATURES
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 lg:w-[80vw] my-5">
          <div className="p-5 bg-secondary text-secondary-content flex flex-col items-center rounded shadow justify-between">
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
            <p className="text-md font-title font-bold m-2 text-center">
              Smart Role Matching
            </p>
            <p className="text-xs font-text m-2 text-center tracking-wider">
              Automatically match employees based on their experience and
              skills.
            </p>
          </div>
          <div className="p-5 bg-secondary text-secondary-content flex flex-col items-center rounded shadow justify-between">
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
            <p className="text-md font-title font-bold m-2 text-center">
              Real-Time Notifications
            </p>
            <p className="text-xs font-text m-2 text-center tracking-wider">
              Ensure everyone stays informed about employee transitions.
            </p>
          </div>
          <div className="p-5 bg-secondary text-secondary-content flex flex-col items-center rounded shadow justify-between">
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
            <p className="text-md font-title font-bold m-2 text-center">
              Advanced Analytics
            </p>
            <p className="text-xs font-text m-2 text-center tracking-wider">
              Provide recruiters with insights into department staffing and
              employee shifts.
            </p>
          </div>
          <div className="p-5 bg-secondary text-secondary-content flex flex-col items-center rounded shadow justify-between">
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
            <p className="text-md font-title font-bold m-2 text-center">
              Department Vacancy Management
            </p>
            <p className="text-xs font-text m-2 text-center tracking-wider">
              Managers can post job openings, specifying skills and
              qualifications needed to fill staffing gaps.
            </p>
          </div>
        </div>
      </div>
      <div
        id="benefits"
        className="p-10 md:p-20 bg-base-100 flex flex-col items-center"
      >
        <p className="md:self-start text-secondary font-title font-bold tracking-wider text-xl border-b-4 border-accent inline-block my-10">
          BENEFITS
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 lg:w-[80vw] my-5">
          <div className="p-5 flex flex-col rounded shadow">
            <p className="text-xl font-title tracking-wider font-semibold text-neutral">
              For Recruiters
            </p>
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
            <p className="font-text text-sm tracking-wide">
              Improve workforce efficiency by filling roles quickly and
              optimizing talent distribution.
            </p>
          </div>
          <div className="p-5 flex flex-col rounded shadow">
            <p className="text-xl font-title tracking-wider font-semibold text-neutral">
              For Managers
            </p>
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
            <p className="font-text text-sm tracking-wide">
              Ensure department needs are met and maintain optimal staffing
              levels.
            </p>
          </div>
          <div className="p-5 flex flex-col rounded shadow">
            <p className="text-xl font-title tracking-wider font-semibold text-neutral">
              For Employees
            </p>
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
            <p className="font-text text-sm tracking-wide">
              Get placed in departments that suit your skills and receive clear
              updates on your position.
            </p>
          </div>
        </div>
      </div>
      <div
        id="faq"
        className="p-10 md:p-20 bg-secondary flex flex-col items-center"
      >
        <p className="md:self-start text-primary font-title font-bold tracking-wider text-xl border-b-4 border-accent inline-block my-10">
          FAQ
        </p>
        <div className="lg:w-[80vw]">
          <div className="collapse collapse-arrow bg-base-200 my-4">
            <input type="radio" name="faq" defaultChecked />
            <div className="collapse-title text-xl font-title font-semibold">
              How does the employee reassignment process work?
            </div>
            <div className="collapse-content">
              <p className="font-text text-sm">
                Admin can assign best match employees for missing positions
                across departments based of their experience and skills
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 my-4">
            <input type="radio" name="faq" />
            <div className="collapse-title  text-xl font-title font-semibold">
              Can employees update their own skills?
            </div>
            <div className="collapse-content">
              <p className="font-text text-sm">
                Yes, each employee has the ability to add, update, or delete his
                skills
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 my-4">
            <input type="radio" name="faq" />
            <div className="collapse-title text-xl font-title font-semibold">
              How do managers post vacancies?
            </div>
            <div className="collapse-content">
              <p className="font-text text-sm">
                By clicking on ‘Add position’ action button, managers can add
                all details for needed position to ensure getting the perfect
                fit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact-us"
        className="p-10 md:p-20 bg-base-200 flex flex-col items-center"
      >
        <p className="md:self-start text-secondary font-title font-bold tracking-wider text-xl border-b-4 border-accent inline-block my-10">
          CONTACT US
        </p>
        <div className="my-4 flex flex-col items-center">
          <div className="flex flex-col md:flex-row w-full">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered lg:w-[20vw] w-full mr-2 my-2"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered lg:w-[20vw] w-full my-2"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full lg:w-[40vw] my-2"
          />
          <textarea
            type="text"
            placeholder="Subject"
            className="textarea textarea-bordered w-full lg:w-[40vw] my-2"
            rows={8}
            style={{ resize: "none" }}
          />
          <br />
          <button className="btn btn-accent btn-wide">Send</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
