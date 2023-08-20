import React from "react";
import AccordionItem from "./AccordionItem";
import Car from "../ClassComponents/CarComponent";
import Bus from "../PropsComponent/BusComponent";
import GetRequest from "../HttpRequests/GetRequest";
import GetAsyncRequest from "../HttpRequests/GetAsyncRequest";
import ValidationForm from "../Validation/ValidationForm";
import Counter from "../ReduxExampleCounter/Counter";

const Accordion = (props) => {
  return (
    <div class="accordion" id="accordionExample">
       <AccordionItem headerText="Class Component Example">
            <Car />
          </AccordionItem>
          <AccordionItem headerText="Props Example">
            <Bus name="Props Bus" />
          </AccordionItem>
          <AccordionItem headerText="Synchronous Request Example">
            <GetRequest />
          </AccordionItem>
          <AccordionItem headerText="Asynchronous Request with Use Effect Example">
            <GetAsyncRequest />
          </AccordionItem>
          <AccordionItem headerText="Form Validation Example">
            <ValidationForm />
          </AccordionItem>
          <AccordionItem headerText="Redux Example">
            <Counter />
          </AccordionItem>
    </div>
  );
};


export default Accordion;