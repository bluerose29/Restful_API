UPDATE [dbo].[Tasks]
SET [taskTitle]=@taskTitle,
    [taskTask]=@taskTask
WHERE [tasksId]=@tasksId

SELECT [tasksId]
      ,[taskTitle]
      ,[taskTask]
  FROM [dbo].[Tasks]
  WHERE [tasksId]=@tasksId