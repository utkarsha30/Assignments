import Router from 'vue-router';
import MeetingsCalendar from '@/components/pages/MeetingsCalendar.vue';
import MeetingsMain from '@/components/pages/meetings/MeetingsMain.vue';
import MeetingsList from '@/components/pages/meetings/MeetingsList.vue';
import MeetingsListByDate from '@/components/pages/meetings/MeetingsListByDate';
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
                            name:'meetings-list-by-date',
                            path:'',
                            component: MeetingsListByDate
                        }   
                    ]
                }
            ]
        }
    ]

});
export default router;