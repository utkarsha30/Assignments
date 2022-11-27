import Router from 'vue-router';
import MeetingsCalendar from '@/components/pages/MeetingsCalendar.vue';
import MeetingsList from '@/components/pages/meetings/Meetingslist.vue';
const router = new Router({
    mode: 'history',
    routes : [
        {
            name : 'calendar',
            path:'/',
            component: MeetingsCalendar
        },
        {
            name: 'meetings-list',
            path:'/meetings',
            component: MeetingsList
        }
    ]

});
export default router;