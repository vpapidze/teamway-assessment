import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Radio, Form, Header, Segment } from 'semantic-ui-react';

import { STARTING_STEP, FINAL_STEP } from 'Constants/form-steps';

import { updateResults } from 'Domain/Slices/Results/resultsSlice';

const getFieldName = id => `field_${id}`;

const TestsForm = ({ tests }) => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(STARTING_STEP);
  const [form, setForm] = useState({});

  const moveNext = () => setStep(step + 1);
  const moveBack = () => setStep(step - 1);

  const onChange = (e, { value, name }) => {
    const newForm = { ...form };
    newForm[name] = value;
    setForm(newForm);
  }

  const submitHandler =()=>{
    dispatch(updateResults(form));
  }

  const currentFieldName = getFieldName(tests[step-1].id);
  const isValueSelected = !!form[currentFieldName];

  return (
    <Form onSubmit={submitHandler}>
      {tests.map((test, index) => {
        const fieldName = getFieldName(test.id);
        const currentStep = (index + 1);
        return (step === currentStep) ? <Segment key={index}>
          <Header as='h3' dividing>
            {test.question}
          </Header>
          {test.options.map((option, opIndex) => {
            return <Form.Field key={opIndex}>
              <Radio
                name={fieldName}
                value={option.value}
                label={option.label}
                checked={form[fieldName] === option.value}
                onChange={onChange}
              />
            </Form.Field>
          })}
        </Segment> : null;
      })}
      {step > STARTING_STEP && <Button onClick={moveBack}>Prev</Button>}
      {step !== FINAL_STEP && <Button onClick={moveNext} disabled={!isValueSelected}>Next</Button>}
      {step === FINAL_STEP && <Button type='submit' disabled={!isValueSelected} primary>Submit</Button>}
    </Form>
  )
}

export default TestsForm;
