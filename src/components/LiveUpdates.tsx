
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";

interface Update {
  id: number;
  title: string;
  content: string;
  date: string;
}

// This would normally fetch from an API or JSON file
const fetchUpdates = async (): Promise<{ updates: Update[], lastUpdated: string }> => {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For now, return mock data
  // In a real app, you'd use fetch() to get updates from a JSON file or API
  return {
    updates: [
      {
        id: 1,
        title: "New Company Added",
        content: "Tech Giant XYZ has just confirmed their participation in AMCF 2025!",
        date: "2025-04-16"
      },
      {
        id: 2,
        title: "CV Workshop Announced",
        content: "Get your resume ready! Free CV workshop on May 5th, 2025.",
        date: "2025-04-15"
      },
      {
        id: 3,
        title: "New Grad Positions Available",
        content: "Over 500 new graduate positions just added across various industries.",
        date: "2025-04-14"
      }
    ],
    lastUpdated: new Date().toISOString()
  };
};

const LiveUpdates = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['updates'],
    queryFn: fetchUpdates
  });

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-[#221F26] to-[#1A1F2C] border border-white/10">
        <CardContent className="p-6">
          {isLoading ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Skeleton className="h-5 w-40 bg-white/5" />
                <Skeleton className="h-4 w-32 bg-white/5" />
              </div>
              <div className="space-y-3 pt-4">
                <Skeleton className="h-24 bg-white/5" />
                <Skeleton className="h-24 bg-white/5" />
                <Skeleton className="h-24 bg-white/5" />
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Latest News</h3>
                <p className="text-sm text-gray-400">
                  Last Updated: {formatDate(data?.lastUpdated || new Date().toISOString())}
                </p>
              </div>
              <div className="space-y-4">
                {data?.updates.map((update) => (
                  <div 
                    key={update.id} 
                    className="p-4 border border-white/5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-[#33C3F0]">{update.title}</h4>
                      <span className="text-xs text-gray-400">{formatDate(update.date)}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-300">{update.content}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveUpdates;
