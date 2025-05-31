import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrgChart from '../OrgChart';

// Mock the framer-motion and ScrollReveal components
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  }
}));

jest.mock('../../ScrollReveal', () => ({
  __esModule: true,
  default: ({ children, delay }: any) => <div data-testid="scroll-reveal" data-delay={delay}>{children}</div>
}));

describe('OrgChart', () => {
  it('renders the team section with correct title', () => {
    render(<OrgChart />);
    expect(screen.getByText('Unser Team')).toBeInTheDocument();
  });

  it('displays all team members', () => {
    render(<OrgChart />);
    expect(screen.getByText('Melih Özkan')).toBeInTheDocument();
    expect(screen.getByText('Xavier Hofmann')).toBeInTheDocument();
    expect(screen.getByText('Burak Zendeli')).toBeInTheDocument();
    expect(screen.getByText('Stefan Müller')).toBeInTheDocument();
    expect(screen.getByText('Noé Gabriel')).toBeInTheDocument();
    expect(screen.getByText('Mohamed Nafsi')).toBeInTheDocument();
  });

  it('displays roles correctly', () => {
    render(<OrgChart />);
    expect(screen.getByText('Chief Executive Officer')).toBeInTheDocument();
    expect(screen.getByText('Project Manager')).toBeInTheDocument();
    expect(screen.getByText('Cloud Architect')).toBeInTheDocument();
    expect(screen.getByText('Legal Advisor')).toBeInTheDocument();
    expect(screen.getAllByText('Full Stack Developer').length).toBe(2);
  });

  it('reveals contact info when a team member is clicked', () => {
    render(<OrgChart />);
    
    // Initially contact section should not be visible
    expect(screen.queryByText('Kontakt')).not.toBeVisible();
    
    // Click on the first team member
    const firstTeamMember = screen.getByText('Melih Özkan').closest('div[role="button"]') || 
                            screen.getByText('Melih Özkan').closest('.cursor-pointer');
    fireEvent.click(firstTeamMember!);
    
    // Contact section should now be visible
    expect(screen.getByText('Kontakt')).toBeVisible();
    
    // Email should be in the format firstname.lastname@suissefocus.ch
    expect(screen.getByText('melih.özkan@suissefocus.ch')).toBeInTheDocument();
  });

  it('handles missing images gracefully', () => {
    render(<OrgChart />);
    
    // Trigger the onError handler of the first image
    const firstImage = screen.getAllByAltText('Melih Özkan')[0] as HTMLImageElement;
    fireEvent.error(firstImage);
    
    // The src should be updated to use the UI Avatars API
    expect(firstImage.src).toContain('ui-avatars.com/api');
  });
}); 