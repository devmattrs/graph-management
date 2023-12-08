import { api } from '@utils/api';
import { Node } from '@utils/tree';
import { format } from 'date-fns';
import { ChangeEvent, useState } from 'react';
import { Button, ScrollArea, Separator, Textarea } from 'src/components';


interface CommentListProps {
	node: Node
}
export const CommentList = ({ node }: CommentListProps) => {
	const utils = api.useContext()
	const [editing, setEditing] = useState<number | undefined>(undefined)
	const [editingText, setEditingText] = useState<string | undefined>(undefined)
	const comments = api.comments.all.useQuery()
	const update = api.comments.update.useMutation({
		onSuccess(input) {
			utils.comments.all.invalidate();
			setEditing(undefined)
		}
	})
	const deleteComment = api.comments.delete.useMutation({
		onSuccess(input) {
			utils.comments.all.invalidate();
		}
	})

	const sendData = async (id: number) => {
		if (editingText)
			await update.mutateAsync({ content: editingText, id: id })
	}
	const changeEditing = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setEditingText(e.currentTarget.value)
	}
	return (
		<div className='h-full '>
			<ScrollArea className='my-5'>
				<ul role="list" className="max-h-full !m-0 overflow-auto flex flex-col gap-7 p-1" >
					{comments.data?.slice(0).reverse().map((comment, idx: number) => (
						<div className='flex flex-col gap-3 animate-in' key={comment.id}>
							{editing === comment.id ? (
								<Textarea onChange={changeEditing} value={editingText} className='w-full h-20 bg-background' />
							) : (
								<p>{comment.content}</p>
							)}
							<div className='flex justify-between items-center'>
								<div>
									{/* <p className='muted small text-xs'>{comment.created_by}</p> */}
									<p className='muted small text-xs'>{comment.created_at ? format(new Date(comment.created_at), 'yyyy-MM-dd') : "Invalid date"}</p>
								</div>
								<div>

									{editing === comment.id ? (
										<>
											<Button variant={'link'} className='text-xs' size={'sm'} onClick={() => setEditing(undefined)}>
												Cancel
											</Button>
											<Button variant={'link'} className='text-xs' size={'sm'} onClick={() => sendData(comment.id)}>
												Save
											</Button>
										</>
									) : (
										<>
											<Button variant={'link'} className='text-xs' size={'sm'} onClick={() => deleteComment.mutate(comment.id)}>
												Delete
											</Button>
											<Button variant={'link'} className='text-xs' size={'sm'} onClick={(e) => {
												setEditing(comment.id)
												setEditingText(comment.content)
												e.preventDefault()
											}}>
												Edit
											</Button>
										</>
									)}
								</div>
							</div>
							<Separator className='bg-background' />
						</div>
					))}
				</ul>
			</ScrollArea>
		</div>
	)
}
