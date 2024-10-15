import { useParams } from "react-router-dom";
import SubjectCard from "@/pages/semesters/SubjectCard";
import SemesterData from "@/data/semesters.json";

const SemesterDetails = () => {
  const params = useParams();

  const currentSemester = SemesterData.filter((semester, idx) => {
    return semester.slug == params.slug;
  });
  console.log(currentSemester);

  return (
    <>
      <div>
        <div className="paginationSection bg-slate-300 text-center p-20">
          <h1>This is Pegination Section</h1>
        </div>
        <div className="SubjectCardSection flex p-4 gap-4 flex-wrap">
          {currentSemester[0].subjectList.map((subject, idx) => (
            <SubjectCard
              key={idx}
              title={subject.name}
              subtitle={subject.detail}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SemesterDetails;
