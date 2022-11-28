export const BoardData = {
  tasks: {
    'task-1': {
      id: 'task-1',
      title: 'title 1',
      description: 'test text for ticket'
    },
    'task-2': {
      id: 'task-2',
      title: 'title 2',
      description: 'test text for ticket'
    },
    'task-3': {
      id: 'task-3',
      title: 'title 3',
      description: 'test text for ticket'
    },
    'task-4': {
      id: 'task-4',
      title: 'title 4',
      description: 'test text for ticket'
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'TO DO',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    },
    'column-2': {
      id: 'column-2',
      title: 'IN PROGRESS',
      taskIds: []
    },
  },
  columnOrder: ['column-1', 'column-2']
}
