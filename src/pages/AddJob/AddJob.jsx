import { object } from 'motion/react-client';
import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {

    const { user } = UseAuth();

    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);

        // process salary range data
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency };


        // process requirements
        const requirementsString = newJob.requirements;
        const requirementsDirty = requirementsString.split(',')

        const requirementsClean = requirementsDirty.map(req => req.trim());
        newJob.requirements = requirementsClean;

        // process responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())

        newJob.status = "active";

        console.log(newJob);

        // save job to the database
        axios.post('http://localhost:3000/jobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "This New Job has been saved & published",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);

            })
    }


    return (
        <div>
            <h2>Please Add a job</h2>
            <form onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Title</label>
                    <input type="text" name='title' className="input" placeholder="Job Title" />

                    <label className="label">Company</label>
                    <input type="text" name='company' className="input" placeholder="Company name" />

                    <label className="label">Location</label>
                    <input type="text" name='location' className="input" placeholder="Company Location" />

                    <label className="label">Company Logo</label>
                    <input type="text" name='company_logo' className="input" placeholder="Company logo url" />
                </fieldset>

                {/* Job Type */}

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" value="On-Site" aria-label="On-site" />
                        <input className="btn" type="radio" name="jobType" value="Remote" aria-label="Remote" />
                        <input className="btn" type="radio" name="jobType" value="Hybrid" aria-label="Hybrid" />
                    </div>

                    {/* Job Category */}
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select defaultValue="Job Category" name="category" className="select">
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>

                </fieldset>

                {/* application deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">Application DeadLine</legend>
                    <input type="date" name="deadline" className='input' />
                </fieldset>

                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">Salary Range</legend>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input type="text" name="min" className="input" placeholder="Minimum Salary" />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input type="text" name='max' className="input" placeholder="Maximum Salary" />
                        </div>
                        <div>
                            <label className="label">Currency</label>
                            <select defaultValue="Select a Currency" name="currency" className="select">
                                <option disabled={true}>Select a Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>Euro</option>
                            </select>
                        </div>

                    </div>
                </fieldset>


                {/* Job Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea className="textarea" name='description' placeholder="Job Description"></textarea>

                </fieldset>

                {/* Job Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">Job Requirements</legend>
                    <textarea className="textarea" name='requirements' placeholder="Job Requirements(separate by comma)"></textarea>

                </fieldset>
                {/* Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">Job Responsibilities</legend>
                    <textarea className="textarea" name='responsibilities' placeholder="Job Responsibilities(separate by comma)"></textarea>

                </fieldset>

                {/* Hr related Info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">Hr related Info</legend>

                    <label className="label">HR Name</label>
                    <input type="text" name='hr_name' className="input" placeholder="HR Name" />

                    <label className="label">HR Email</label>
                    <input type="email" name='hr_email' defaultValue={user.email} className="input" placeholder="HR Email" />
                </fieldset>

                <input type="submit" className='btn btn-secondary' value="Add Job" />
            </form>
        </div>
    );
};

export default AddJob;