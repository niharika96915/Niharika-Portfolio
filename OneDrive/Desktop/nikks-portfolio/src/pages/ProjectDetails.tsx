import { Navigate, useParams } from 'react-router-dom'

import StudyFlowAI from './projects/StudyFlowAI'
import PlacementPreparationAgent from './projects/PlacementPreparationAgent'
import CaseFile from './projects/CaseFile'


export default function ProjectDetails() {
  const { projectId } = useParams()

  if (projectId === 'studyflow-ai') {
    return <StudyFlowAI />
  }

  if (projectId === 'placement-preparation-agent') {
    return <PlacementPreparationAgent />
  }
  if (projectId === 'casefile') {
  return <CaseFile />
}

  

  return <Navigate to="/" replace />
}