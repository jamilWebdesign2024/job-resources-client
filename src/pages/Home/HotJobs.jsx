import React, { use, useEffect, useState } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = () => {

     const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then((res) => res.json())
            .then((data) => setJobs(data))
            .catch((err) => console.error("Error fetching jobs:", err));
    }, []);

    


    return (
        <div>
            <h1 className='text-4xl mb-5 text-center'>Hot Jobs of the Day</h1>
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
           </div>
        </div>
    );
};

export default HotJobs;