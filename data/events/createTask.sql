INSERT INTO [dbo].[Tasks]
    (
        [tasksId],
        [taskTitle],
        [taskTask]
    )
VALUES 
    (
        @tasksId,
        @taskTitle,
        @taskTask,
    )

SELECT SCOPE_IDENTITY() AS tasksId