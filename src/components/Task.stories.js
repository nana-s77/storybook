import React from 'react';
import Task from './Task';

export default {
    component: Task,
    title: 'Task',
};

const Template = args => <Task {...args} />

// Templateのコピーしている　新しい関数を生成する　ー＞結果的にコピーされている
export const Default = Template.bind({});
// コピーしたTemplateのargsを変えていってる
Default.args = {
    task: {
        id: '2',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updatedAt: new Date(1018, 0, 1, 9, 0),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
    },
};