import React, { Suspense } from 'react';
import ApplicationsState from './ApplicationsState';
import ApplicationList from './ApplicationList';
import UseAuth from '../../Hooks/UseAuth';
import { myApplicationsPromise } from '../../api/applicationsApi';


const MyApplications = () => {

    const {user} = UseAuth();

    return (
        <div>
            <ApplicationsState></ApplicationsState>
            <Suspense fallback={'loading your applications'}> 
                <ApplicationList
                myApplicationsPromise={myApplicationsPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;