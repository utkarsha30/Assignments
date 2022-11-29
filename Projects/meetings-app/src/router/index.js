import Router from 'vue-router';
import MeetingsCalendar from '@/components/pages/MeetingsCalendar.vue';
import MeetingsMain from '@/components/pages/meetings/MeetingsMain.vue';
import MeetingsList from '@/components/pages/meetings/MeetingsList.vue';
import MeetingsCard from '@/components/pages/meetings/MeetingsCard';
import MeetingsAdd from '@/components/pages/meetings/MeetingsAdd'
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
            component: MeetingsMain,
            children :[
                {
                    name: 'meetings-list',
                    path: '',
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
        }
    ]

});
export default router;