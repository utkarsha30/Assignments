import Router from 'vue-router';
import MeetingsCalendar from '@/components/pages/MeetingsCalendar.vue';
import MeetingsMain from '@/components/pages/meetings/MeetingsMain.vue';
import MeetingsList from '@/components/pages/meetings/MeetingsList.vue';
import MeetingsCard from '@/components/pages/meetings/MeetingsCard';
import MeetingsAdd from '@/components/pages/meetings/MeetingsAdd';
import TeamsList from '@/components/pages/teams/TeamsList';
import TeamsCard from '@/components/pages/teams/TeamsCard';
import TeamsAdd from '@/components/pages/teams/TeamsAdd';
const router = new Router({
    mode: 'history',
    routes : [
        {
            name : 'calendar',
            path:'/',
            component: MeetingsCalendar
        },
        {
            name: 'meetings-main',
            path:'/meetings',
            redirect: 'meetings-list',
            component: MeetingsMain,
            children :[
                {
                    name: 'meetings-list',
                    path: '',
                    redirect:'meetings-card',
                    component: MeetingsList,
                    children :[
                        {
                            name:'meetings-card',
                            path:'',
                            component: MeetingsCard
                        } 
                    ]
                },
                {
                    name: 'meetings-add',
                    path: '/meetings/add',
                    component: MeetingsAdd
                }
            ]
        },
        {
            name:'teams-list',
            path:'/teams',
            redirect: 'teams-card',
            component: TeamsList,
            children :[
                {
                    name: 'teams-card',
                    path: '',
                    component: TeamsCard
                },
                {
                    name: 'teams-add',
                    path: '/teams/add',
                    component: TeamsAdd
                }
            ]
        }
    ]

});
export default router;