import React, { Suspense } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../api/jobsApi';

const MyPostJobs = () => {

    const {user}=UseAuth();

    return (
        <div>
            <h2>My Posted Jobs: </h2>
            <Suspense>
                <JobList 
                jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
                ></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostJobs;