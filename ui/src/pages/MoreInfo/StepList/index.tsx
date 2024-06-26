import { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import AddItemAccordion from '../AddItemAccordion';
import { Step } from '../type';
import StepListItem from './StepListItem';
import { getFieldError } from '../field-errors-utils';

interface StepListProps {
  steps: Step[];
  formErrors: string[];
  handleStepOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMoveStepUp: (index: number) => void;
  handleMoveStepDown: (index: number) => void;
  handleRemoveStep: (index: number) => void;
  handleAddStep: () => void;
}

const StepList: FC<StepListProps> = (props) => {
  const {
    steps,
    formErrors,
    handleStepOnChange,
    handleMoveStepUp,
    handleMoveStepDown,
    handleRemoveStep,
    handleAddStep,
  } = props;
  return (
    <AddItemAccordion
      error={getFieldError('steps', formErrors)}
      title='Steps'
      addItemButtonLabel='Add Step'
      addItemButtonTestId='addStep'
      handleAddItem={handleAddStep}
    >
      {steps?.length > 0 ? (
        <Grid container direction='column' spacing={2}>
          {steps.map((step: Step, index: number) => (
            <StepListItem
              key={step.id}
              index={index}
              step={step}
              stepCount={steps.length}
              formErrors={formErrors}
              handleMoveStepUp={handleMoveStepUp}
              handleMoveStepDown={handleMoveStepDown}
              handleRemoveStep={handleRemoveStep}
              handleStepOnChange={handleStepOnChange}
            />
          ))}
        </Grid>
      ) : (
        <Typography variant='inherit'>
          Please press the add button to add a step
        </Typography>
      )}
    </AddItemAccordion>
  );
};

export default StepList;
