import FeatureDesign from "../../component/FeatureDesign"
import FeatureSectionA from "../../component/FeatureSectionA"
import FeatureSectionB from "../../component/FeatureSectionB"

const Feature = () => {
  return (
    <div className="pt-80 pb-30">
        <div className="min-h-391.75 flex flex-col items-center gap-42.5 relative">
        <div><FeatureSectionA /></div>
        <div><FeatureSectionB /></div>
        <div className="absolute w-full h-full"><FeatureDesign /></div>
        </div>
    </div>
  )
}

export default Feature