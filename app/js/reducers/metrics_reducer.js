import { scrumPractices, xpPractices } from 'js/mocked_data/practices';
import { linesOfCode, codeCoverage } from 'js/mocked_data/test';
import { storyPointEffort, velocity, detailedVelocity, remedialFocus, velocityBar, velocityLine } from 'js/mocked_data/velocity';
import { teamSatisfaction } from 'js/mocked_data/team_satisfaction';
import { sprintBurndown } from 'js/mocked_data/sprint_burndown';
import { releaseBurndown } from 'js/mocked_data/release_burndown';
import { happinessIndex } from 'js/mocked_data/happiness_index';
import { averageLeadTime } from 'js/mocked_data/lead_time';
import { commitmentLevel } from 'js/mocked_data/commitment';
import { customerSatisfaction } from 'js/mocked_data/customer_satisfaction';
import { sprintCadence } from 'js/mocked_data/sprint_cadence';
import { projectCodeOwnership, teamCodeOwnership } from 'js/mocked_data/code_ownership';
import { numberOfTestCases } from 'js/mocked_data/test_cases';
import { sprintInterference } from 'js/mocked_data/sprint_interference';
import { defectsOverTime } from 'js/mocked_data/defects_over_time';

const initialState = {
  currentMetric: null,
  // Probably temporary
  scrumPractices,
  xpPractices,
  linesOfCode,
  codeCoverage,
  velocity,
  detailedVelocity,
  remedialFocus,
  velocityBar,
  velocityLine,
  teamSatisfaction,
  sprintBurndown,
  releaseBurndown,
  happinessIndex,
  averageLeadTime,
  storyPointEffort,
  commitmentLevel,
  customerSatisfaction,
  sprintCadence,
  numberOfTestCases,
  codeOwnership: {
    project: projectCodeOwnership,
    team: teamCodeOwnership
  },
  sprintInterference,
  defectsOverTime
};

const metricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_METRIC":
      return Object.assign({}, state, {
        currentMetric: action.metric
      });
    default:
      return state;
  }
};

export default metricsReducer;
