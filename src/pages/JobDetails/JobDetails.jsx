import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {

    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, responsibilities, status, company, requirements, hr_email, hr_name, company_logo } = useLoaderData();
    
    

    return (
        <div>
            <h2 className="text-6xl">Job Details of: {title}</h2>
            <p>Company: {company}</p>
            <Link to={`/jobApply/${_id}`}> <button className='btn btn-primary'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;