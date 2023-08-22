import { React } from "react";
import AccordionItem from "./AccordionItem";
import Car from "../ClassComponents/CarComponent";
import Bus from "../PropsComponent/BusComponent";
import GetRequest from "../HttpRequests/GetRequest";
import GetAsyncRequest from "../HttpRequests/GetAsyncRequest";
import ValidationForm from "../Validation/ValidationForm";
import Counter from "../ReduxExampleCounter/Counter";
import { useSelector } from "react-redux";

const Accordion = (props) => {
  const counterVal = useSelector((state) => state.counter.counterVal);

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
      <AccordionItem headerText="Form Validation Example">
        <ValidationForm />
      </AccordionItem>
      <AccordionItem headerText="Use Selector Example">
        <div>
          <span className="badge rounded-pill text-bg-success">
            <span style={{ color: "black" }}>
              Redux Example Counter Value:
              <strong style={{ color: "red" }}> {counterVal} </strong>
            </span>
          </span>
        </div>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
