'use client';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Bell, Clock, Video } from 'lucide-react';
import { notifications } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card';
import Link from 'next/link';

export default function NotificationBell() {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-6 w-6" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-destructive-foreground text-xs">
              {unreadCount}
            </span>
          )}
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <Card className="border-0 shadow-none">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <div className="max-h-96 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div key={notification.id} className={`border-b p-4 ${!notification.read ? 'bg-primary/5' : ''}`}>
                   <Link href={notification.link} className="block hover:bg-muted/50 -m-4 p-4">
                    <div className="flex items-start gap-4">
                        <div className="mt-1">
                            {notification.type === 'webinar' && <Video className="h-5 w-5 text-primary" />}
                            {notification.type === 'reminder' && <Clock className="h-5 w-5 text-yellow-500" />}
                            {notification.type === 'update' && <Bell className="h-5 w-5 text-green-500" />}
                        </div>
                        <div>
                            <p className="font-semibold">{notification.title}</p>
                            <p className="text-sm text-muted-foreground">{notification.description}</p>
                            <p className="text-xs text-muted-foreground mt-1">{notification.timestamp}</p>
                        </div>
                    </div>
                   </Link>
                </div>
              ))
            ) : (
              <p className="p-4 text-center text-muted-foreground">No new notifications</p>
            )}
          </div>
            {notifications.length > 0 && (
                <div className="p-2 text-center border-t">
                    <Button variant="link" size="sm">Mark all as read</Button>
                </div>
            )}
        </Card>
      </PopoverContent>
    </Popover>
  );
}
