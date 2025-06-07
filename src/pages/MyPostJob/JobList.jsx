import React, { use } from 'react';
import { Link } from 'react-router';

const JobList = ({ jobsCreatedByPromise }) => {

    const jobs = use(jobsCreatedByPromise)

    return (
        <div>
            <h2 className="text-3xl">Jobs Created by You: {jobs.length}</h2>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Count</th>
                            <th>View Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        
                        {
                            jobs.map((job, index)=><tr key={job._id}>
                            <th>{index + 1}</th>
                            <td>{job.title}</td>
                            <td>{job.deadline}</td>
                            <td>{job.application_count}</td>
                            <td><Link to={`/applications/${job._id}`}>View Application</Link></td>
                        </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobList;